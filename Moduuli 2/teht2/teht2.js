'use strict';

let osallistujat = prompt('Anna osallistujien määrä:');

osallistujat = parseInt(osallistujat);

if (isNaN(osallistujat) || osallistujat <= 0) {
    alert('Syötä kelvollinen osallistujien määrä (positiivinen luku).');
} else {

    let nimet = [];

    for (let i = 0; i < osallistujat; i++) {
        let nimi = prompt(`Anna osallistujan ${i + 1} nimi:`);
        nimet.push(nimi);
    }

    nimet.sort();

    alert('Osallistujat aakkosjärjestyksessä:\n' + nimet.join('\n'));
}
