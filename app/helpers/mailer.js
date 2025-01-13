import nodemailer from 'nodemailer'
import bcryptjs from "bcryptjs";
import User from '../models/userModel';

export const sendEmail = async({email, emailType, userId}) =>{
    try{
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId, {
                $set : {
                    verifyToken : hashedToken,
                    verifyTokenExpiry : Date.now() + 3600000
                }
            });
        }else if(emailType === "RESET"){
            await User.findByIdAndUpdate(userId, {
                $set : {
                    forgotPasswordToken : hashedToken, 
                    forgotPasswordTokenExpiry : Date.now() + 3600000
                }
            });
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
            user: "617a3f7f2b44a0",
            pass: "3fa230091030b6"
            }
        });

        const mailOption = {
            from: 'shafikulrahman66@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click  <a href="${process.env.DOMAIN}/verifyEmail?token=${hashedToken}">here</a></p>`,
        }

        const mailResponse = await transport.sendMail(mailOption)

        return mailResponse;
    }catch(error){
        console.log("Failing to send email.");
        console.log(error);
        throw new error(error);
    }
}