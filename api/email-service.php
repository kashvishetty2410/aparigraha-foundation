<?php
// Simplified email service without PHPMailer dependency
// Use PHP's built-in mail() function as fallback

function sendEmail($to, $subject, $htmlBody) {
    $config = require __DIR__ . '/config.php';
    
    // Try PHPMailer first
    if (file_exists(__DIR__ . '/PHPMailer/src/PHPMailer.php')) {
        require_once __DIR__ . '/PHPMailer/src/Exception.php';
        require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
        require_once __DIR__ . '/PHPMailer/src/SMTP.php';
        
        // Use fully qualified class names
        $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
        
        try {
            $mail->isSMTP();
            $mail->Host = $config['SMTP_HOST'];
            $mail->SMTPAuth = true;
            $mail->Username = $config['SMTP_USER'];
            $mail->Password = $config['SMTP_PASS'];
            $mail->SMTPSecure = $config['SMTP_PORT'] == 465 ? \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS : \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = $config['SMTP_PORT'];
            
            $mail->setFrom($config['SMTP_FROM_EMAIL'], $config['SMTP_FROM_NAME']);
            $mail->addAddress($to);
            
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $htmlBody;
            $mail->AltBody = strip_tags($htmlBody);
            
            $mail->send();
            error_log("✓ Email sent successfully to: $to");
            return true;
        } catch (\PHPMailer\PHPMailer\Exception $e) {
            error_log("✗ PHPMailer failed: {$mail->ErrorInfo}");
            // Fall through to basic mail()
        }
    }
    
    // Fallback to basic PHP mail()
    $headers = "From: {$config['SMTP_FROM_NAME']} <{$config['SMTP_FROM_EMAIL']}>\r\n";
    $headers .= "Reply-To: {$config['SMTP_FROM_EMAIL']}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    $result = mail($to, $subject, $htmlBody, $headers);
    
    if ($result) {
        error_log("✓ Email sent via mail() to: $to");
        return true;
    } else {
        error_log("✗ Email failed to send to: $to");
        return false;
    }
}
