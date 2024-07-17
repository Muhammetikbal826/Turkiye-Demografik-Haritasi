// Şehir verileri
var cities = [
    {
        name: "İstanbul",
        prevYearPopulation: "15,000,000",
        currentYearPopulation: "16,000,000",
        crimeRate: [20, 30, 50],
        genderDistribution: [48, 52],
        description: "İstanbul, Türkiye'nin en kalabalık şehri ve ekonomik merkezidir."
    },
    {
        name: "Ankara",
        prevYearPopulation: "5,000,000",
        currentYearPopulation: "5,500,000",
        crimeRate: [15, 25, 60],
        genderDistribution: [50, 50],
        description: "Ankara, Türkiye'nin başkenti ve ikinci en kalabalık şehridir."
    },
    {
        name: "İzmir",
        prevYearPopulation: "4,000,000",
        currentYearPopulation: "4,500,000",
        crimeRate: [10, 40, 50],
        genderDistribution: [47, 53],
        description: "İzmir, Türkiye'nin üçüncü en kalabalık şehri ve Ege Bölgesi'nin merkezidir."
    }
];

// CSV formatına dönüştürme fonksiyonu
function convertToCSV(data) {
    var csv = '';
    // Başlık satırını ekle
    csv += 'Şehir,Önceki Yıl Popülasyonu,Mevcut Yıl Popülasyonu,Hafif Suç Oranı,Orta Suç Oranı,Ciddi Suç Oranı,Erkek Dağılımı,Kadın Dağılımı,Açıklama\n';
    // Her şehir verisini döngüyle CSV'ye ekle
    data.forEach(function(city) {
        csv += '"' + city.name + '",' + city.prevYearPopulation + ',' + city.currentYearPopulation + ',' + city.crimeRate.join(',') + ',' + city.genderDistribution.join(',') + ',"' + city.description.replace(/"/g, '""') + '"\n';
    });
    return csv;
}

// CSV dosyasını indirme fonksiyonu
function downloadCSV(csvData, filename) {
    var blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // HTML5 download attribute destekleyen tarayıcılarda
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

// CSV verisini oluştur
var csvData = convertToCSV(cities);

// Excel dosyası olarak indir
var filename = 'cities_data.csv';
downloadCSV(csvData, filename);
