import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoiService {

  waypts = [
    {
      id:"1",
      location: { lat: 39.616198572687665, lng: 8.822681938825326 },
      phone: +390709386183,
      address: "Via Salvemini, 12, 09030 Sardara SU",
      title: "Civico Museo Archeologico “Villa Abbas”",
      gallery : [
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5776.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5785.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5778.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF3599.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5779.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5786.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5801.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5774.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5790.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5768.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5769.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5772.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5773.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5793.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5795.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5799.jpg"
   
      ],
      tickets : [

      ],
      narrazione:"<p>La storia dell&rsquo;umanit&agrave; ha seguito spesso i percorsi segnati dalle vie di comunicazione, nella loro eterogenea conformazione che va dai semplici sentieri sino alle imponenti vie imperiali di et&agrave; romana.<\/p>\n<p>Questa relazione si fa manifesta ad esempio nei toponimi, che ne trattengono la traccia verbale.<\/p>\n<p>Pare questo il caso di Massama, l&rsquo;antica Marsima, un toponimo che secondo alcuni studiosi deriverebbe dall&rsquo;ubicazione dell&rsquo;abitato lungo la &ldquo;via maxima&rdquo;, la strada che in et&agrave; romana collegava Tharros e Forum Traiani (odierna Fordongianus).<\/p>\n<p>A Massama incontriamo l&rsquo;Oratorio delle Anime, un edificio di origine altomedievale &ndash; come attesta l&rsquo;antica dedica a San Nicola, vescovo di Mira &ndash; su cui agirono gli interventi successivi di epoca romanica (prima met&agrave; XIII secolo). La chiesa presenta una pianta cruciforme; al posto del braccio est incontriamo per&ograve; un&rsquo;<a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/abside\/\" class=\"glossaryLink\" data-cmtooltip=\"<div class=glossaryItemTitle>Abside<\/div><div class=glossaryItemBody>Struttura architettonica a pianta semicircolare o poligonale che di norma conclude la navata principale, in alcuni casi &egrave; presente anche sul fondo della navata laterale o del transetto.<\/div><div class=&quot;cmtt_related_articles_wrapper&quot;><div class=&quot;cmtt_related_title cmtt_related_articles_title&quot;>Articoli correlati: <\/div><ul class=&quot;cmtt_related&quot;><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/guspini-chiesa-di-santa-maria\/&quot;target=&quot;_blank&quot;>Guspini, Chiesa di Santa Maria<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/dolianova-chiesa-di-san-pantaleo\/&quot;target=&quot;_blank&quot;>Dolianova, Chiesa di San Pantaleo<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/pula-chiesa-di-santefisio-martire-di-nora\/&quot;target=&quot;_blank&quot;>Pula, Chiesa di Sant'Efisio Martire di Nora<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/gesico-chiesa-di-santa-maria-d-itria\/&quot;target=&quot;_blank&quot;>Gesico, Chiesa di Santa Maria d&rsquo; Itria<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/villamar-chiesa-di-san-pietro\/&quot;target=&quot;_blank&quot;>Villamar, Chiesa di San Pietro<\/a><\/li><\/ul><\/div><div class=glossaryTooltipMoreLinkWrapper><a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/abside\/ >Leggi tutto<\/a><\/div>\" >abside<\/a> di considerevoli dimensioni caratterizzata da una particolare forma a &ldquo;ferro di cavallo&rdquo;.<\/p>\n<p>Un <a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/tiburio\/\" class=\"glossaryLink\" data-cmtooltip='&lt;div class=glossaryItemTitle&gt;Tiburio&lt;\/div&gt;&lt;div class=glossaryItemBody&gt;Rivestimento esterno, cilindrico o prismatico di una cupola usato in alcune forme architettoniche bizantine, romane e gotiche.&lt;\/div&gt;&lt;div class=\"cmtt_related_articles_wrapper\"&gt;&lt;div class=\"cmtt_related_title cmtt_related_articles_title\"&gt;Articoli correlati: &lt;\/div&gt;&lt;ul class=\"cmtt_related\"&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/cossoine-chiesa-di-santa-maria-iscalas\/\"target=\"_blank\"&gt;Cossoine, Chiesa di Santa Maria Iscalas&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/massama-oratorio-delle-anime\/\"target=\"_blank\"&gt;Massama, Oratorio delle Anime&lt;\/a&gt;&lt;\/li&gt;&lt;\/ul&gt;&lt;\/div&gt;&lt;div class=glossaryTooltipMoreLinkWrapper&gt;&lt;a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/tiburio\/ &gt;Leggi tutto&lt;\/a&gt;&lt;\/div&gt;'>tiburio<\/a> ottagonale si innesta all&rsquo;incrocio dei bracci. La facciata presenta un profilo a spioventi , con <a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/paramento\/\" class=\"glossaryLink\" data-cmtooltip=\"&lt;div class=glossaryItemTitle&gt;Paramento&lt;\/div&gt;&lt;div class=glossaryItemBody&gt;Ognuna delle superfici laterali di una struttura muraria.&lt;\/div&gt;&lt;div class=&quot;cmtt_related_articles_wrapper&quot;&gt;&lt;div class=&quot;cmtt_related_title cmtt_related_articles_title&quot;&gt;Articoli correlati: &lt;\/div&gt;&lt;ul class=&quot;cmtt_related&quot;&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/san-vero-milis-chiesa-di-santa-sofia\/&quot;target=&quot;_blank&quot;&gt;San Vero Milis, Chiesa di Santa Sofia&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/silanus-chiesa-di-santa-sabina\/&quot;target=&quot;_blank&quot;&gt;Silanus, Chiesa di Santa Sabina&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/zeddiani-chiesa-di-santantonio-di-cellevane\/&quot;target=&quot;_blank&quot;&gt;Zeddiani, Chiesa di Sant'Antonio di Cellevane&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/bonorva-chiesa-di-san-lorenzo-di-rebeccu\/&quot;target=&quot;_blank&quot;&gt;Bonorva, Chiesa di San Lorenzo di Rebeccu&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/massama-oratorio-delle-anime\/&quot;target=&quot;_blank&quot;&gt;Massama, Oratorio delle Anime&lt;\/a&gt;&lt;\/li&gt;&lt;\/ul&gt;&lt;\/div&gt;&lt;div class=glossaryTooltipMoreLinkWrapper&gt;&lt;a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/paramento\/ &gt;Leggi tutto&lt;\/a&gt;&lt;\/div&gt;\">paramento<\/a> liscio privo di finestre. Qui si apre l&rsquo;essenziale portale d&rsquo;accesso.<\/p>\n<p>Poco al di sopra del portale si nota un filare di conci segnate dalle cavit&agrave; create per accogliere i tipici <a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/bacini-ceramici\/\" class=\"glossaryLink\" data-cmtooltip='&lt;div class=glossaryItemTitle&gt;Bacini ceramici&lt;\/div&gt;&lt;div class=glossaryItemBody&gt;Elementi architettonici decorativi costituiti da recipienti in ceramica, variamente rivestiti, inglobati nelle superfici murarie esterne.&lt;\/div&gt;&lt;div class=\"cmtt_related_articles_wrapper\"&gt;&lt;div class=\"cmtt_related_title cmtt_related_articles_title\"&gt;Articoli correlati: &lt;\/div&gt;&lt;ul class=\"cmtt_related\"&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/guspini-chiesa-di-santa-maria\/\"target=\"_blank\"&gt;Guspini, Chiesa di Santa Maria&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/lunamatrona-chiesa-di-santa-maria-assunta\/\"target=\"_blank\"&gt;Lunamatrona, Chiesa di Santa Maria Assunta&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/olbia-basilica-di-san-simplicio\/\"target=\"_blank\"&gt;Olbia, Basilica di San Simplicio&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/ottana-chiesa-di-san-nicola\/\"target=\"_blank\"&gt;Ottana, Chiesa di San Nicola&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/serdiana-chiesa-di-santa-maria-di-sibiola\/\"target=\"_blank\"&gt;Serdiana, Chiesa di Santa Maria di Sibiola&lt;\/a&gt;&lt;\/li&gt;&lt;\/ul&gt;&lt;\/div&gt;&lt;div class=glossaryTooltipMoreLinkWrapper&gt;&lt;a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/bacini-ceramici\/ &gt;Leggi tutto&lt;\/a&gt;&lt;\/div&gt;'>bacini ceramici<\/a>.<\/p>\n<p>Il campanile &egrave; in mattoni cotti, in contrasto col resto della chiesa in pietra: questo potrebbe essere indizio di una sua realizzazione in un momento successivo.<\/p>\n<p>Prendiamo cos&igrave; commiato dalla chiesa dell&rsquo;Oratorio delle Anime, confidando che la nostra visita possa aver contribuito ad alleviare la loro permanenza nel Purgatorio.<\/p>\n",
      virtualTour : "<iframe width=\"100%\" height=\"550\" src=\"https:\/\/www.chieseromanichesardegna.it\/virtual\/66\/index.html\" allowfullscreen><\/iframe>",
      audio: "https://www.chieseromanichesardegna.it/wp-content/uploads/2021/04/4_itinerari-INTRO.mp3",
      category : "Museo"
    },
    {
      id:"2",
      location: { lat: 39.6159638816967, lng:  8.818078220431165},
      phone: null,
      address: "Via Pintor, 09030 Sardara SU",
      title: "chiesa di Sant'Antonio",
      gallery : [
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5776.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5785.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5778.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF3599.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5779.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5786.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5801.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5774.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5790.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5768.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5769.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5772.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5773.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5793.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5795.jpg",
        "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5799.jpg"
   
      ],
      tickets : [

      ],
      narrazione:"<p>La storia dell&rsquo;umanit&agrave; ha seguito spesso i percorsi segnati dalle vie di comunicazione, nella loro eterogenea conformazione che va dai semplici sentieri sino alle imponenti vie imperiali di et&agrave; romana.<\/p>\n<p>Questa relazione si fa manifesta ad esempio nei toponimi, che ne trattengono la traccia verbale.<\/p>\n<p>Pare questo il caso di Massama, l&rsquo;antica Marsima, un toponimo che secondo alcuni studiosi deriverebbe dall&rsquo;ubicazione dell&rsquo;abitato lungo la &ldquo;via maxima&rdquo;, la strada che in et&agrave; romana collegava Tharros e Forum Traiani (odierna Fordongianus).<\/p>\n<p>A Massama incontriamo l&rsquo;Oratorio delle Anime, un edificio di origine altomedievale &ndash; come attesta l&rsquo;antica dedica a San Nicola, vescovo di Mira &ndash; su cui agirono gli interventi successivi di epoca romanica (prima met&agrave; XIII secolo). La chiesa presenta una pianta cruciforme; al posto del braccio est incontriamo per&ograve; un&rsquo;<a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/abside\/\" class=\"glossaryLink\" data-cmtooltip=\"<div class=glossaryItemTitle>Abside<\/div><div class=glossaryItemBody>Struttura architettonica a pianta semicircolare o poligonale che di norma conclude la navata principale, in alcuni casi &egrave; presente anche sul fondo della navata laterale o del transetto.<\/div><div class=&quot;cmtt_related_articles_wrapper&quot;><div class=&quot;cmtt_related_title cmtt_related_articles_title&quot;>Articoli correlati: <\/div><ul class=&quot;cmtt_related&quot;><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/guspini-chiesa-di-santa-maria\/&quot;target=&quot;_blank&quot;>Guspini, Chiesa di Santa Maria<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/dolianova-chiesa-di-san-pantaleo\/&quot;target=&quot;_blank&quot;>Dolianova, Chiesa di San Pantaleo<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/pula-chiesa-di-santefisio-martire-di-nora\/&quot;target=&quot;_blank&quot;>Pula, Chiesa di Sant'Efisio Martire di Nora<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/gesico-chiesa-di-santa-maria-d-itria\/&quot;target=&quot;_blank&quot;>Gesico, Chiesa di Santa Maria d&rsquo; Itria<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/villamar-chiesa-di-san-pietro\/&quot;target=&quot;_blank&quot;>Villamar, Chiesa di San Pietro<\/a><\/li><\/ul><\/div><div class=glossaryTooltipMoreLinkWrapper><a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/abside\/ >Leggi tutto<\/a><\/div>\" >abside<\/a> di considerevoli dimensioni caratterizzata da una particolare forma a &ldquo;ferro di cavallo&rdquo;.<\/p>\n<p>Un <a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/tiburio\/\" class=\"glossaryLink\" data-cmtooltip='&lt;div class=glossaryItemTitle&gt;Tiburio&lt;\/div&gt;&lt;div class=glossaryItemBody&gt;Rivestimento esterno, cilindrico o prismatico di una cupola usato in alcune forme architettoniche bizantine, romane e gotiche.&lt;\/div&gt;&lt;div class=\"cmtt_related_articles_wrapper\"&gt;&lt;div class=\"cmtt_related_title cmtt_related_articles_title\"&gt;Articoli correlati: &lt;\/div&gt;&lt;ul class=\"cmtt_related\"&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/cossoine-chiesa-di-santa-maria-iscalas\/\"target=\"_blank\"&gt;Cossoine, Chiesa di Santa Maria Iscalas&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/massama-oratorio-delle-anime\/\"target=\"_blank\"&gt;Massama, Oratorio delle Anime&lt;\/a&gt;&lt;\/li&gt;&lt;\/ul&gt;&lt;\/div&gt;&lt;div class=glossaryTooltipMoreLinkWrapper&gt;&lt;a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/tiburio\/ &gt;Leggi tutto&lt;\/a&gt;&lt;\/div&gt;'>tiburio<\/a> ottagonale si innesta all&rsquo;incrocio dei bracci. La facciata presenta un profilo a spioventi , con <a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/paramento\/\" class=\"glossaryLink\" data-cmtooltip=\"&lt;div class=glossaryItemTitle&gt;Paramento&lt;\/div&gt;&lt;div class=glossaryItemBody&gt;Ognuna delle superfici laterali di una struttura muraria.&lt;\/div&gt;&lt;div class=&quot;cmtt_related_articles_wrapper&quot;&gt;&lt;div class=&quot;cmtt_related_title cmtt_related_articles_title&quot;&gt;Articoli correlati: &lt;\/div&gt;&lt;ul class=&quot;cmtt_related&quot;&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/san-vero-milis-chiesa-di-santa-sofia\/&quot;target=&quot;_blank&quot;&gt;San Vero Milis, Chiesa di Santa Sofia&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/silanus-chiesa-di-santa-sabina\/&quot;target=&quot;_blank&quot;&gt;Silanus, Chiesa di Santa Sabina&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/zeddiani-chiesa-di-santantonio-di-cellevane\/&quot;target=&quot;_blank&quot;&gt;Zeddiani, Chiesa di Sant'Antonio di Cellevane&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/bonorva-chiesa-di-san-lorenzo-di-rebeccu\/&quot;target=&quot;_blank&quot;&gt;Bonorva, Chiesa di San Lorenzo di Rebeccu&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/massama-oratorio-delle-anime\/&quot;target=&quot;_blank&quot;&gt;Massama, Oratorio delle Anime&lt;\/a&gt;&lt;\/li&gt;&lt;\/ul&gt;&lt;\/div&gt;&lt;div class=glossaryTooltipMoreLinkWrapper&gt;&lt;a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/paramento\/ &gt;Leggi tutto&lt;\/a&gt;&lt;\/div&gt;\">paramento<\/a> liscio privo di finestre. Qui si apre l&rsquo;essenziale portale d&rsquo;accesso.<\/p>\n<p>Poco al di sopra del portale si nota un filare di conci segnate dalle cavit&agrave; create per accogliere i tipici <a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/bacini-ceramici\/\" class=\"glossaryLink\" data-cmtooltip='&lt;div class=glossaryItemTitle&gt;Bacini ceramici&lt;\/div&gt;&lt;div class=glossaryItemBody&gt;Elementi architettonici decorativi costituiti da recipienti in ceramica, variamente rivestiti, inglobati nelle superfici murarie esterne.&lt;\/div&gt;&lt;div class=\"cmtt_related_articles_wrapper\"&gt;&lt;div class=\"cmtt_related_title cmtt_related_articles_title\"&gt;Articoli correlati: &lt;\/div&gt;&lt;ul class=\"cmtt_related\"&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/guspini-chiesa-di-santa-maria\/\"target=\"_blank\"&gt;Guspini, Chiesa di Santa Maria&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/lunamatrona-chiesa-di-santa-maria-assunta\/\"target=\"_blank\"&gt;Lunamatrona, Chiesa di Santa Maria Assunta&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/olbia-basilica-di-san-simplicio\/\"target=\"_blank\"&gt;Olbia, Basilica di San Simplicio&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/ottana-chiesa-di-san-nicola\/\"target=\"_blank\"&gt;Ottana, Chiesa di San Nicola&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/serdiana-chiesa-di-santa-maria-di-sibiola\/\"target=\"_blank\"&gt;Serdiana, Chiesa di Santa Maria di Sibiola&lt;\/a&gt;&lt;\/li&gt;&lt;\/ul&gt;&lt;\/div&gt;&lt;div class=glossaryTooltipMoreLinkWrapper&gt;&lt;a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/bacini-ceramici\/ &gt;Leggi tutto&lt;\/a&gt;&lt;\/div&gt;'>bacini ceramici<\/a>.<\/p>\n<p>Il campanile &egrave; in mattoni cotti, in contrasto col resto della chiesa in pietra: questo potrebbe essere indizio di una sua realizzazione in un momento successivo.<\/p>\n<p>Prendiamo cos&igrave; commiato dalla chiesa dell&rsquo;Oratorio delle Anime, confidando che la nostra visita possa aver contribuito ad alleviare la loro permanenza nel Purgatorio.<\/p>\n",
      virtualTour : "https://www.chieseromanichesardegna.it/virtual/66/index.html",
      audio: "https://www.chieseromanichesardegna.it/wp-content/uploads/2021/04/4_itinerari-INTRO.mp3",
      category : "Museo"
    },
    {
      id:"3",
      location: { lat: 39.61432431602601, lng:  8.824222356055275},
        phone: null,
        address: "Piazza S. Gregorio, 1, 09030 Sardara SU",
        title: "Chiesa di San Gregorio",
        gallery : [
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5776.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5785.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5778.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF3599.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5779.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5786.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5801.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5774.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5790.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5768.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5769.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5772.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5773.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5793.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5795.jpg",
          "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/67.-Massama-Oratorio-delle-Anime-Davide-Baraldi-DSCF5799.jpg"
     
        ],
        tickets : [
  
        ],
        narrazione:"<p>La storia dell&rsquo;umanit&agrave; ha seguito spesso i percorsi segnati dalle vie di comunicazione, nella loro eterogenea conformazione che va dai semplici sentieri sino alle imponenti vie imperiali di et&agrave; romana.<\/p>\n<p>Questa relazione si fa manifesta ad esempio nei toponimi, che ne trattengono la traccia verbale.<\/p>\n<p>Pare questo il caso di Massama, l&rsquo;antica Marsima, un toponimo che secondo alcuni studiosi deriverebbe dall&rsquo;ubicazione dell&rsquo;abitato lungo la &ldquo;via maxima&rdquo;, la strada che in et&agrave; romana collegava Tharros e Forum Traiani (odierna Fordongianus).<\/p>\n<p>A Massama incontriamo l&rsquo;Oratorio delle Anime, un edificio di origine altomedievale &ndash; come attesta l&rsquo;antica dedica a San Nicola, vescovo di Mira &ndash; su cui agirono gli interventi successivi di epoca romanica (prima met&agrave; XIII secolo). La chiesa presenta una pianta cruciforme; al posto del braccio est incontriamo per&ograve; un&rsquo;<a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/abside\/\" class=\"glossaryLink\" data-cmtooltip=\"<div class=glossaryItemTitle>Abside<\/div><div class=glossaryItemBody>Struttura architettonica a pianta semicircolare o poligonale che di norma conclude la navata principale, in alcuni casi &egrave; presente anche sul fondo della navata laterale o del transetto.<\/div><div class=&quot;cmtt_related_articles_wrapper&quot;><div class=&quot;cmtt_related_title cmtt_related_articles_title&quot;>Articoli correlati: <\/div><ul class=&quot;cmtt_related&quot;><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/guspini-chiesa-di-santa-maria\/&quot;target=&quot;_blank&quot;>Guspini, Chiesa di Santa Maria<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/dolianova-chiesa-di-san-pantaleo\/&quot;target=&quot;_blank&quot;>Dolianova, Chiesa di San Pantaleo<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/pula-chiesa-di-santefisio-martire-di-nora\/&quot;target=&quot;_blank&quot;>Pula, Chiesa di Sant'Efisio Martire di Nora<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/gesico-chiesa-di-santa-maria-d-itria\/&quot;target=&quot;_blank&quot;>Gesico, Chiesa di Santa Maria d&rsquo; Itria<\/a><\/li><li class=&quot;cmtt_related_item&quot;><a href=&quot;https:\/\/www.chieseromanichesardegna.it\/villamar-chiesa-di-san-pietro\/&quot;target=&quot;_blank&quot;>Villamar, Chiesa di San Pietro<\/a><\/li><\/ul><\/div><div class=glossaryTooltipMoreLinkWrapper><a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/abside\/ >Leggi tutto<\/a><\/div>\" >abside<\/a> di considerevoli dimensioni caratterizzata da una particolare forma a &ldquo;ferro di cavallo&rdquo;.<\/p>\n<p>Un <a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/tiburio\/\" class=\"glossaryLink\" data-cmtooltip='&lt;div class=glossaryItemTitle&gt;Tiburio&lt;\/div&gt;&lt;div class=glossaryItemBody&gt;Rivestimento esterno, cilindrico o prismatico di una cupola usato in alcune forme architettoniche bizantine, romane e gotiche.&lt;\/div&gt;&lt;div class=\"cmtt_related_articles_wrapper\"&gt;&lt;div class=\"cmtt_related_title cmtt_related_articles_title\"&gt;Articoli correlati: &lt;\/div&gt;&lt;ul class=\"cmtt_related\"&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/cossoine-chiesa-di-santa-maria-iscalas\/\"target=\"_blank\"&gt;Cossoine, Chiesa di Santa Maria Iscalas&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/massama-oratorio-delle-anime\/\"target=\"_blank\"&gt;Massama, Oratorio delle Anime&lt;\/a&gt;&lt;\/li&gt;&lt;\/ul&gt;&lt;\/div&gt;&lt;div class=glossaryTooltipMoreLinkWrapper&gt;&lt;a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/tiburio\/ &gt;Leggi tutto&lt;\/a&gt;&lt;\/div&gt;'>tiburio<\/a> ottagonale si innesta all&rsquo;incrocio dei bracci. La facciata presenta un profilo a spioventi , con <a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/paramento\/\" class=\"glossaryLink\" data-cmtooltip=\"&lt;div class=glossaryItemTitle&gt;Paramento&lt;\/div&gt;&lt;div class=glossaryItemBody&gt;Ognuna delle superfici laterali di una struttura muraria.&lt;\/div&gt;&lt;div class=&quot;cmtt_related_articles_wrapper&quot;&gt;&lt;div class=&quot;cmtt_related_title cmtt_related_articles_title&quot;&gt;Articoli correlati: &lt;\/div&gt;&lt;ul class=&quot;cmtt_related&quot;&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/san-vero-milis-chiesa-di-santa-sofia\/&quot;target=&quot;_blank&quot;&gt;San Vero Milis, Chiesa di Santa Sofia&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/silanus-chiesa-di-santa-sabina\/&quot;target=&quot;_blank&quot;&gt;Silanus, Chiesa di Santa Sabina&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/zeddiani-chiesa-di-santantonio-di-cellevane\/&quot;target=&quot;_blank&quot;&gt;Zeddiani, Chiesa di Sant'Antonio di Cellevane&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/bonorva-chiesa-di-san-lorenzo-di-rebeccu\/&quot;target=&quot;_blank&quot;&gt;Bonorva, Chiesa di San Lorenzo di Rebeccu&lt;\/a&gt;&lt;\/li&gt;&lt;li class=&quot;cmtt_related_item&quot;&gt;&lt;a href=&quot;https:\/\/www.chieseromanichesardegna.it\/massama-oratorio-delle-anime\/&quot;target=&quot;_blank&quot;&gt;Massama, Oratorio delle Anime&lt;\/a&gt;&lt;\/li&gt;&lt;\/ul&gt;&lt;\/div&gt;&lt;div class=glossaryTooltipMoreLinkWrapper&gt;&lt;a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/paramento\/ &gt;Leggi tutto&lt;\/a&gt;&lt;\/div&gt;\">paramento<\/a> liscio privo di finestre. Qui si apre l&rsquo;essenziale portale d&rsquo;accesso.<\/p>\n<p>Poco al di sopra del portale si nota un filare di conci segnate dalle cavit&agrave; create per accogliere i tipici <a aria-describedby=\"tt\" href=\"https:\/\/www.chieseromanichesardegna.it\/glossary\/bacini-ceramici\/\" class=\"glossaryLink\" data-cmtooltip='&lt;div class=glossaryItemTitle&gt;Bacini ceramici&lt;\/div&gt;&lt;div class=glossaryItemBody&gt;Elementi architettonici decorativi costituiti da recipienti in ceramica, variamente rivestiti, inglobati nelle superfici murarie esterne.&lt;\/div&gt;&lt;div class=\"cmtt_related_articles_wrapper\"&gt;&lt;div class=\"cmtt_related_title cmtt_related_articles_title\"&gt;Articoli correlati: &lt;\/div&gt;&lt;ul class=\"cmtt_related\"&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/guspini-chiesa-di-santa-maria\/\"target=\"_blank\"&gt;Guspini, Chiesa di Santa Maria&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/lunamatrona-chiesa-di-santa-maria-assunta\/\"target=\"_blank\"&gt;Lunamatrona, Chiesa di Santa Maria Assunta&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/olbia-basilica-di-san-simplicio\/\"target=\"_blank\"&gt;Olbia, Basilica di San Simplicio&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/ottana-chiesa-di-san-nicola\/\"target=\"_blank\"&gt;Ottana, Chiesa di San Nicola&lt;\/a&gt;&lt;\/li&gt;&lt;li class=\"cmtt_related_item\"&gt;&lt;a href=\"https:\/\/www.chieseromanichesardegna.it\/serdiana-chiesa-di-santa-maria-di-sibiola\/\"target=\"_blank\"&gt;Serdiana, Chiesa di Santa Maria di Sibiola&lt;\/a&gt;&lt;\/li&gt;&lt;\/ul&gt;&lt;\/div&gt;&lt;div class=glossaryTooltipMoreLinkWrapper&gt;&lt;a class=glossaryTooltipMoreLink href=https:\/\/www.chieseromanichesardegna.it\/glossary\/bacini-ceramici\/ &gt;Leggi tutto&lt;\/a&gt;&lt;\/div&gt;'>bacini ceramici<\/a>.<\/p>\n<p>Il campanile &egrave; in mattoni cotti, in contrasto col resto della chiesa in pietra: questo potrebbe essere indizio di una sua realizzazione in un momento successivo.<\/p>\n<p>Prendiamo cos&igrave; commiato dalla chiesa dell&rsquo;Oratorio delle Anime, confidando che la nostra visita possa aver contribuito ad alleviare la loro permanenza nel Purgatorio.<\/p>\n",  
        virtualTour : "https://www.chieseromanichesardegna.it/virtual/66/index.html",
        audio: "https://www.chieseromanichesardegna.it/wp-content/uploads/2021/04/4_itinerari-INTRO.mp3",
        category : "Chiesa"
      
    }
  ];

  destination = {
    
    id:"3",
    location: { lat: 39.61432431602601, lng:  8.824222356055275},
      phone: null,
      address: "Piazza S. Gregorio, 1, 09030 Sardara SU",
      title: "Chiesa di San Gregorio",
      gallery : [

      ],
      tickets : [

      ],
      virtualTour : "https://www.chieseromanichesardegna.it/virtual/66/index.html",
      audio: "https:\/\/www.chieseromanichesardegna.it\/wp-content\/uploads\/2021\/04\/4_itinerari-INTRO.mp3",
      category : "Chiesa"
    
  }

  private poiSource = new BehaviorSubject<any>(null);

  currentPOI = this.poiSource.asObservable();

  constructor() { }

  getPois(){
    this.poiSource.next(this.waypts);
  }

  getDestinationPosition(){
    return {latitude:this.destination.location.lat,longitude:this.destination.location.lng}
  }

}