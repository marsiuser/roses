
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex, nofollow">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="address=no">

    <title>Roses</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Raleway:900|Roboto:400,500,700,900" rel="stylesheet">

    <style>
        body { background-color: #F5F5F5; font-family: 'Roboto', sans-serif; color: #3F4551;}
        .header { margin-top: 50px; }
        .logo { font-size: 24px; color: #3F4551; font-family: 'Futura-Bold', sans-serif; font-weight: 400; }
        .logo strong { color: #0200FF; font-weight: 400; }
        .main { margin: 80px 0 50px; }
        .intro { margin-bottom: 30px; }
        .intro h1 { font-size: 65px; margin-bottom: 25px; font-weight: 900; }
        .intro p {font-weight: 700;}
        .pages-list { padding: 0; margin: 0; }
        .pages-list li { border-bottom: 1px solid #979797; padding:15px; min-height: 65px; font-weight: 500;}
        .pages-list li:last-child { border-bottom: none;}
        .pages-list li a {
            font-family: 'Raleway', sans-serif; font-size: 18px; line-height: 21px; color: #FFFFFF; font-weight: 900; text-transform: uppercase;
            padding:10px 25px; border: 2px solid #0200FF; border-radius: 4px; text-align: center;
            background-color: #0200FF;
        }
        .pages-list li a:hover,
        .pages-list li a:focus,
        .pages-list li a:active { background-color: transparent!important; color: #0200FF!important; border-color: #0200FF!important; box-shadow: none!important;}
        .pages-list li .in-progress { font-size: 16px; text-transform: uppercase; font-weight: 700; color: #AAABAF; width: 155px; }

        @media (max-width: 575px)
        {
            .header {margin-top: 30px; }
            .logo {margin-bottom: 10px; }
            .intro h1 { font-size: 50px; line-height: 52px;}
            .main { margin-top: 60px; }
            .pages-list li .page-name { max-width: 150px; }
        }
    </style>

</head>
<body>
    <div class="wrapper">
        <header class="header">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-12 col-md-4 logo text-center">wop-lab<strong>.company</strong></div>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-sm-12 col-md-9 mx-auto text-center intro">
                        <h1>Front-end development</h1>
                        <p>Please check out the pages that are ready for review. Your page will open in a new tab.</p>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-sm-11 col-md-7 mx-auto">
                        <ul class="pages-list">
                            <li>
                                <ul>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span class="page-name">Pages</span>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span class="page-name">Main Page</span>
                                        <a href="main.php" class="btn btn-outline-primary" target="_blank">open page</a>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span class="page-name">Text Page</span>
                                        <a href="text.php" class="btn btn-outline-primary" target="_blank">open page</a>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span class="page-name">404 Page</span>
                                        <a href="404.php" class="btn btn-outline-primary" target="_blank">open page</a>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span class="page-name">Product Page</span>
                                        <a href="product.php" class="btn btn-outline-primary" target="_blank">open page</a>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span class="page-name">Catalog Page</span>
                                        <a href="catalog.php" class="btn btn-outline-primary" target="_blank">open page</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>