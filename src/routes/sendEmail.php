<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collecte des données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $object = htmlspecialchars($_POST['object']);
    $message = htmlspecialchars($_POST['message']);

    // Prépare l'e-mail
    $to = "bde@mmibordeaux.com";
    $subject = "Nouveau message de contact: " . $object;
    $body = "Nom: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi de l'e-mail
    if (mail($to, $subject, $body, $headers)) {
        $message = urlencode("Votre message a été envoyé avec succès.");
        $messageType = "success";
    } else {
        $message = urlencode("Une erreur est survenue. Veuillez réessayer.");
        $messageType = "error";
    }

    // Redirection vers contact.svelte avec les paramètres
    header("Location: contact");
    exit();
} else {
    $message = urlencode("Méthode de requête invalide.");
    $messageType = "error";
    header("Location: contact");
    exit();
}
?>
