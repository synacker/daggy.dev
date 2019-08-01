// This is where it all goes :)

new ClipboardJS('.copy-button');

var OSName = 'unknown';
if (navigator.appVersion.indexOf("Win") != -1) OSName = 'windows';
if (navigator.appVersion.indexOf("Mac") != -1) OSName = 'macos';
if (navigator.appVersion.indexOf("X11") != -1) OSName = 'linux';
if (navigator.appVersion.indexOf("Linux") != -1) OSName = 'Linux';

switch (OSName) {
    case 'unknown':
    case 'linux':
        $('#install_buttons a[href="#install_linux"]').trigger('click');
        break;
    case 'macos':
        $('#install_buttons a[href="#install_macos"]').trigger('click')
        break;
    case 'windows':
        $('#install_buttons a[href="#install_windows"]').trigger('click')
        break;

    default:;
}
