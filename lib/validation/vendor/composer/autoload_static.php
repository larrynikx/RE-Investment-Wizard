<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit85337c8fba76ffd9ab418ba2ef04afce
{
    public static $prefixLengthsPsr4 = array (
        'R' => 
        array (
            'Rakit\\Validation\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Rakit\\Validation\\' => 
        array (
            0 => __DIR__ . '/..' . '/rakit/validation/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit85337c8fba76ffd9ab418ba2ef04afce::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit85337c8fba76ffd9ab418ba2ef04afce::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
