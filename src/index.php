<?php require_once( 'couch/cms.php' ); ?>
<cms:template title='Homepage' />
<!DOCTYPE html>
<html lang="en" class="homepage">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jatin Khanna</title>
    <link rel="stylesheet" href="./styles/main.css">
    <link rel="stylesheet" href="./styles/fontawesome-free/css/all.min.css">
</head>
<body>
    <div class="site-wrapper">
        <?php include './partials/header.php' ?>
        <main>
            <h1 class="home__title">Jatin Khanna</h1>
            <div class="content-wrapper">
                <div style="display: none">Hi Hannah!</div>
                <section class="home__main">
                    <div class="text-content cms-content">
                        <cms:editable name='main_content' type='richtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequuntur, nostrum optio iure quam recusandae ullam qui sit illo quaerat, nemo, sed distinctio ut vel nesciunt eaque harum. Cumque, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at odit delectus, illo ab in reiciendis numquam aliquam consequatur reprehenderit minus ducimus ipsa quia ad. Blanditiis adipisci minus omnis culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam adipisci facilis ducimus magni culpa a quis. Dolorum omnis nostrum sunt at possimus veritatis iure, saepe in! Amet veniam repellendus dolorum!</cms:editable>
                    </div>
                </section>
            </div>
        </main>
        <?php include './partials/footer.php' ?>
    </div>
</body>
</html>
<?php COUCH::invoke(); ?>