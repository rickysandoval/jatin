<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jatin Khanna | Podcast</title>
    <link rel="stylesheet" href="../styles/main.css">
    <link rel="stylesheet" href="../styles/fontawesome-free/css/all.min.css">
     <script type="module" src="./podcast-min.js"></script>
</head>
<body>
    <div class="site-wrapper">
        <?php include '../partials/header.php' ?>
        <main>
            <h1 class="page__title">Podcast</h1>
            <section class="page__section">
                <p class="text-content">Jatin is a young comedian, writer, environmentalist, and philosopher trying to make sense of it all.</p>
                <p class="text-content">Join him as he explores the world and tries to understand the big questions: What is our purpose? What makes us truly happy? Should Kanye stop making music? At what age should your mom stop folding your laundry?</p>
                <p class="text-content">With this podcast, he hopes to explore these topics and more, by interviewing other millennials who are trying to make the most of their time here on Earth.</p>
            </section>
            <div class="podcast-list__wrapper">
                <ul class="podcast-list" id="podcast-list">
                </ul>
                <div class="spinner-wrapper" id="episodes-loading-spinner">
                    <?php include '../partials/spinner.php' ?>
                </div>
                <div class="load-more-wrapper">
                    <button class="button" id="load-more-episodes">Load More</button>
                </div>
            </div>
        </main>
        <?php include '../partials/footer.php' ?>
    </div>
</body>
</html>