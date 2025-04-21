package fitrack.buddy.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.util.HashMap;
import java.util.Map;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private SpringTemplateEngine templateEngine;
    public void sendEmail(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("mahdikhadher2001@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);
    }

    public void createEmail(String to, String subject, String userName) {
        try {
            Map<String, Object> context = new HashMap<>();
            context.put("userName", userName);

            String htmlContent = templateEngine.process("RequestCreated", new org.thymeleaf.context.Context(null, context));
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);
            messageHelper.setFrom("mahdikhadher2001@gmail.com");
            messageHelper.setTo(to);
            messageHelper.setSubject(subject);
            messageHelper.setText(htmlContent, true);

            mailSender.send(mimeMessage);
        } catch (MailException e) {
            e.printStackTrace();
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

    public void acceptEmail(String to, String subject, String userName, String accepter) {
        try {
            Map<String, Object> context = new HashMap<>();
            context.put("userName", userName);
            context.put("accepter", accepter);


            String htmlContent = templateEngine.process("RequestAccepted", new org.thymeleaf.context.Context(null, context));
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);
            messageHelper.setFrom("mahdikhadher2001@gmail.com");
            messageHelper.setTo(to);
            messageHelper.setSubject(subject);
            messageHelper.setText(htmlContent, true);

            mailSender.send(mimeMessage);
        } catch (MailException e) {
            e.printStackTrace();
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
    public void subscribeEmail(String to, String subject, String userName, String subscriber) {
        try {
            Map<String, Object> context = new HashMap<>();
            context.put("userName", userName);
            context.put("subscriber", subscriber);


            String htmlContent = templateEngine.process("RequestSubscribed", new org.thymeleaf.context.Context(null, context));
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);
            messageHelper.setFrom("mahdikhadher2001@gmail.com");
            messageHelper.setTo(to);
            messageHelper.setSubject(subject);
            messageHelper.setText(htmlContent, true);

            mailSender.send(mimeMessage);
        } catch (MailException e) {
            e.printStackTrace();
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}

