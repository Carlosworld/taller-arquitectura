if (document.getElementById('mapid')) {

    var mymap = L.map('mapid').setView([19.4952781,-99.044259], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

    L.marker([19.805868,-97.3776902]).addTo(mymap).bindPopup('Icata Arquitectos').openPopup();
    // .bindTooltip('GDLWebCamp 2018, Boletos ya disponibles')
    // .openTooltip();
}