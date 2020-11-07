<?php
// ~ json_decode ~
// $content = file_get_contents('coba.json');
// $result = json_decode($content, true);
// var_dump($result);


// ~ json_encode ~
$data = [
    "nama" => "Nuryana",
    "nrp" => "928098292",
    "umur" => 18,
    "lulus" => true,
    "hobby" => [
        "coding",
        "game"
    ],
    "pembimbing" => [
        "dosen" => "Sandhika Galih",
        "penasihat" => "Angga Risky"

    ]
];

// echo json_encode($data);

print(json_encode($data));
