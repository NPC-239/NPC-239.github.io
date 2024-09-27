# Use Composer official image to install dependencies
FROM composer:latest AS composer
WORKDIR /app
COPY ./composer.json ./

# Explicitly require fakerphp/faker and phpmailer/phpmailer if not already in composer.json
RUN composer require fakerphp/faker phpmailer/phpmailer --no-update

# Install required PHP extensions first, including Xdebug
FROM php:8.2-apache

# Install required packages and PHP extensions
RUN apt-get update && apt-get install -y \
        libpq-dev \
        libjpeg-dev \
        libpng-dev \
        libgif-dev \
        libfreetype6-dev \
        libzip-dev \
        unzip \
        && docker-php-ext-configure gd --with-jpeg --with-freetype \
        && docker-php-ext-install gd pgsql pdo pdo_pgsql zip \
        && pecl install xdebug \
        && docker-php-ext-enable xdebug

# Configure Xdebug
RUN echo "zend_extension=xdebug.so" >> /usr/local/etc/php/php.ini
RUN echo "xdebug.mode=develop,debug" >> /usr/local/etc/php/php.ini
RUN echo "xdebug.start_with_request=yes" >> /usr/local/etc/php/php.ini
RUN echo "xdebug.client_host=host.docker.internal" >> /usr/local/etc/php/php.ini
RUN echo "xdebug.client_port=9003" >> /usr/local/etc/php/php.ini
RUN echo "xdebug.discover_client_host=0" >> /usr/local/etc/php/php.ini

# Install Composer
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /var/www/html

# Copy the application files
COPY . /var/www/html

# Ensure required directories exist and set permissions
RUN mkdir -p /var/www/html/storage /var/www/html/bootstrap/cache \
    && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Install Composer dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Expose the port Apache will run on
EXPOSE 80