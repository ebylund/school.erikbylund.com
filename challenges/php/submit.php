    <?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $comments = $_POST['comments'];
        $errors = [];
        $welcome = "Thanks for giving up your information so freely, I promise to not make too of a profit from selling it";
        mail($email, 'whats up player' . $name, $welcome . "\n\nYour comments: ". $comments);
    ?>

    <h1>Success!</h1>
    <h3><?=$name?></h3>
    <h3><?=$email?></h3>
    <h3><?=$comments?></h3>
    <!-- <div class="contact_form">
        <h3>Give us your info</h3>
        <form action="submit.php" method="post">
            <input type="text" name="name" placeholder="Your Namew ***" />
            <input type="email" name="email" placeholder="Email Waddress ***" />
            <textarea name="comments" placeholder="Type your Message"></textarea>
            <input type="submit" value="Send" />
        </form>
        <h6>*** We might sell your info</h6>
    </div> -->
