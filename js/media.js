var currentMediaSession = null;
var mediaCurrentTime = 0;
var session = null;
var media = [{
	'url': 'http://stream.adr.fm:8005/;',
	'title': 'ADR.FM Escape',
	'country': 'USA',
	'genre': 'Trance',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s113072q.png'
}, {
	'url': 'http://stream.adr.fm:8003/;',
	'title': 'ADR.FM Daybreak',
	'country': 'USA',
	'genre': 'Trance',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s135622q.png'
}, {
	'url': 'http://stream.adr.fm:8000/ede',
	'title': 'ADR.FM Electronic Dance Experience',
	'country': 'USA',
	'genre': 'House, Dubstep',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s232826q.png'
}, {
	'url': 'http://178.32.238.139:8500/;',
	'title': 'Radio Seven',
	'country': 'Sweden',
	'genre': 'Trance',
	'thumb': 'http://i1.sndcdn.com/artworks-000045017367-nlmqje-original.jpg?e30f094'
}, {
	'url': 'http://82.201.100.9:8000/RADIO538_WEB_MP3',
	'title': 'Radio 538',
	'country': 'Netherlands',
	'genre': 'Top 40 - Pop',
	'thumb': 'https://www.sohosted.com/UserFiles/image/nieuwsberichten/radio538.jpg'
}, {
	'url': 'http://82.201.100.4:8000/SLAMFM_WEB_MP3',
	'title': 'Slam FM',
	'country': 'Netherlands',
	'genre': 'Top 40 - Pop',
	'thumb': 'http://www.slamfm.nl/static/fb-200x200.png'
}, {
	'url': 'http://ht.mp3.stream.tb-group.fm/;',
	'title': 'HouseTime FM',
	'country': 'Germany',
	'genre': 'Trance',
	'thumb': 'http://a.image.web.tb-group.fm/www/facebook/housetime.jpg'
}, {
	'url': 'http://tb.mp3.stream.tb-group.fm/;',
	'title': 'TechnoBase FM',
	'country': 'Germany',
	'genre': 'Techno, Trance',
	'thumb': 'http://a.image.web.tb-group.fm/www/facebook/technobase.jpg'
}, {
	'url': 'http://xapp2023227392c40000.f.l.i.lb.core-cdn.net/40000mb/live/app2023227392/w2075033608/live_de_64.mp3',
	'title': 'Antenne Thueringen',
	'country': 'Germany',
	'genre': 'Pop',
	'thumb': 'https://lh6.ggpht.com/bBx-MgG9fFWvaAoyZaomnDdWTFxtUgTnBs_H2kzwfTHjByrXzYOUPlfZTYOdKrthKA=w300'
}, {
	'url': 'http://il29.cast-tv.com:8001/tlv1.mp3',
	'title': 'TLV1',
	'country': 'Israel',
	'genre': 'Local News and Music',
	'thumb': 'http://i1.sndcdn.com/avatars-000047629072-e68hvu-t500x500.jpg?435a760'
}, {
	'url': 'http://217.138.44.60/stream/1/;',
	'title': 'Monocle 24',
	'country': 'United Kingdom',
	'genre': 'News, Books and Culture',
	'thumb': 'http://visualcache.com/wp-content/files/2011/10/monocle24.jpg'
}, {
	'url': 'http://nprdmp.ic.llnwd.net/stream/nprdmp_live01_mp3',
	'title': 'NPR Program Stream',
	'country': 'USA',
	'genre': 'National and World News',
	'thumb': '/images/logo_npr.jpg'
}, {
	'url': 'http://voyagewmp.radyotvonline.com/;',
	'title': 'Radio Voyage',
	'country': 'Turkey',
	'genre': 'Ambient',
	'thumb': 'http://static.rad.io/images/broadcasts/06/69/12956/w175.jpeg'
}, {
	'url': 'http://ice-sov.musicradio.com/LBC973MP3Low',
	'title': 'LBC London',
	'country': 'United Kingdom',
	'genre': 'Spoken word',
	'thumb': 'http://www.audioagain.com/shared/imagestore/lbc_generic806646019.jpg'
}, {
	'url': 'http://audio1.ipercast.net/frenchradiolondon.com/hi/mp3',
	'title': 'French Radio London',
	'country': 'United Kingdom',
	'genre': 'French',
	'thumb': '/images/logo_french.jpg'
}, {
	'url': 'http://icecast1.rte.ie/pulse',
	'title': 'RTE Pulse',
	'country': 'Ireland',
	'genre': 'Electronic - Dance',
	'thumb': '/images/logo_pulse.gif'
}, {
	'url': 'http://pub8.jazzradio.com/jr_currentjazz',
	'title': 'Jazz Radio',
	'country': 'USA',
	'genre': 'Jazz',
	'thumb': '/images/logo_jazz.png'
}, {
	'url': 'http://173.192.137.34:8050/;',
	'title': 'Antena Zagreb',
	'country': 'Croatia',
	'genre': 'Top 40, Pop',
	'thumb': '/images/logo_zagreb.png'
}, {
	'url': 'http://uk2.internet-radio.com:30250/;',
	'title': 'Indigo FM',
	'country': 'United Kingdom',
	'genre': 'Community Radio',
	'thumb': 'http://cdn002.itunedradio.com/img/logos/205/indigo_fm_uk.png'
}, {
	'url': 'http://gffstream.ic.llnwd.net/stream/gffstream_mp3_w48a',
	'title': 'Bremen Eins',
	'country': 'Germany',
	'genre': 'German',
	'thumb': 'http://i.img.co/radio/98/76/27698_290.png'
}, {
	'url': 'http://live-icy.gss.dr.dk/A/A05L.mp3',
	'title': 'DR P3',
	'country': 'Denmark',
	'genre': 'Euro Hits',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s24861q.png'
}, {
	'url': 'http://live-icy.gss.dr.dk:8000/A/A29L.mp3',
	'title': 'DR P6 Beat',
	'country': 'Denmark',
	'genre': 'Alternative',
	'thumb': 'http://i.img.co/radio/20/65/6520_290.png'
}, {
	'url': 'http://live-icy.gss.dr.dk:8000/A/A21L.mp3',
	'title': 'DR P7 Mix',
	'country': 'Denmark',
	'genre': 'Pop',
	'thumb': 'http://i.img.co/radio/27/65/6527_290.png'
}, {
	'url': 'http://live-icy.gss.dr.dk:8000/A/A18L.mp3',
	'title': 'DR Mama',
	'country': 'Denmark',
	'genre': 'Top 40, Pop',
	'thumb': 'http://cdn.marketplaceimages.windowsphone.com/v8/images/0595a8e9-3f4b-4b23-b190-cf92f1da3804?imageType=ws_icon_large'
}, {
	'url': 'http://live.radio101.hr:7038/;',
	'title': 'Radio 101',
	'country': 'Croatia',
	'genre': 'News, Sport',
	'thumb': 'http://balkansnet.org/radio101.gif'
}, {
	'url': 'http://adwzg3.tdf-cdn.com/8472/nrj_172793.mp3',
	'title': 'Nostalgie',
	'country': 'France',
	'genre': 'Classic Hits',
	'thumb': 'http://images.viaway.com/109382_180.png'
}, {
	'url': 'http://live.nsbradio.co.uk:8904/;',
	'title': 'NSB Radio',
	'country': 'United Kingdom',
	'genre': 'Breakbeats',
	'thumb': 'http://heavy-sessions.org/wp-content/uploads/2012/11/NSB-Radio-logo.jpg'
}, {
	'url': 'http://50.7.96.210:8496/stream',
	'title': 'Budgie Collective',
	'country': 'United Kingdom',
	'genre': 'Electronic - Dance',
	'thumb': 'http://mx-images.mixify.com.s3.amazonaws.com/lrg_budgiecollective.com1400X14001379785838.jpg'
}, {
	'url': 'http://streams.radio.warwick.ac.uk/raw-high.mp3',
	'title': 'RaW - Radio Warwick',
	'country': 'United Kingdom',
	'genre': 'Various - College Rock',
	'thumb': 'http://upload.wikimedia.org/wikipedia/en/4/41/RaW_Small_Logo_(200px).png'
}, {
	'url': 'http://8303.live.streamtheworld.com:3690/WSCRAM_SC',
	'title': '670 The Score',
	'country': 'USA',
	'genre': 'CBS News / Talk / Sports',
	'thumb': 'http://profile.ak.fbcdn.net/hprofile-ak-snc4/50313_60098543542_3229937_n.jpg'
}, {
	'url': 'http://67.213.213.143:8040/;',
	'title': 'Rock X Radio',
	'country': 'Canada',
	'genre': 'Rock',
	'thumb': 'http://www.liveonlineradio.net/wp-content/uploads/2013/10/rock-x-radio.png'
}, {
	'url': 'http://ns.nulab.si:8800/classics',
	'title': 'Radio Nula',
	'country': 'United Kingdom',
	'genre': 'Funk',
	'thumb': 'http://radionula.com/radionula.jpg'
}, {
	'url': 'http://size.ice.infomaniak.ch/size-128.mp3',
	'title': 'Radio Size',
	'country': 'France',
	'genre': 'Hip Hop, Soul, Pop Rock, Electro',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s162576t.png'
}, {
	'url': 'http://emf.mp3.miisolutions.net/a1/air1_web_tunein',
	'title': 'Air1 Radio',
	'country': 'USA',
	'genre': 'Modern Christian',
	'thumb': '/images/logo_air1.jpg'
}, {
	'url': 'http://stream.infowars.com/;',
	'title': 'Alex Jones Infowars',
	'country': 'USA',
	'genre': 'News, Talk',
	'thumb': 'http://bobradioshow.com/wp-content/uploads/alex_jones_podcast.jpg'
}, {
	'url': 'http://stream.radiojavan.com/',
	'title': 'Radio Javan',
	'country': 'USA',
	'genre': 'Pop, Middle East, World',
	'thumb': 'http://upload.wikimedia.org/wikipedia/en/3/31/Radio_javan_logo_red.jpg'
}, {
	'url': 'http://mp3.streampower.be/mnm-mid.mp3',
	'title': 'MNM',
	'country': 'Belgium',
	'genre': 'Pop, Top 40',
	'thumb': 'http://www.hermanboel.eu/radioinvlaanderen/images/nationaal/mnm.jpg'
}, {
	'url': 'http://mp3.streampower.be/stubru-mid.mp3',
	'title': 'VRT Studio Brussel',
	'country': 'Belgium',
	'genre': 'Euro Hits, Modern Rock',
	'thumb': 'http://www.sterrennieuws.be/foto/1232388726.jpg'
}, {
	'url': 'http://nostalgiewhatafeeling.ice.infomaniak.ch/nostalgiewhatafeeling-128.mp3',
	'title': 'Nostalgie Vlaanderen',
	'country': 'Belgium',
	'genre': 'Classic Hits',
	'thumb': 'http://i.img.co/radio/00/53/35300_290.png'
}, {
	'url': 'http://tsfdirecto.tsf.pt/tsfdirecto.mp3',
	'title': 'TSF Radio Noticias',
	'country': 'Portugal',
	'genre': 'News, Sport',
	'thumb': 'http://i.img.co/radio/59/49/4959_290.png'
}, {
	'url': 'http://eksenwmp.radyotvonline.com/;',
	'title': 'Radyo Eksen',
	'country': 'Turkey',
	'genre': 'Modern Rock',
	'thumb': '/images/logo_eksen.png'
}, {
	'url': 'http://mp3.dinamo.fm/;',
	'title': 'Dinamo.fm',
	'country': 'Turkey',
	'genre': 'Electronic, Dance',
	'thumb': '/images/logo_dinamo.jpeg'
}, {
	'url': 'http://7889.live.streamtheworld.com:443/JOY_FM_SC',
	'title': 'Joy FM',
	'country': 'Turkey',
	'genre': 'Easy Listening',
	'thumb': '/images/logo_joy.png'
}, {
	'url': 'http://stream2.rushradio.org:8120/;',
	'title': 'Rush Radio',
	'country': 'USA',
	'genre': 'Rock',
	'thumb': '/images/logo_rush.jpg'
}, {
	'url': 'http://217.172.190.185:8226/;',
	'title': 'Dolfijn FM',
	'country': 'Netherlands Antilles',
	'genre': 'Euro Hits, Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s54456q.png'
}, {
	'url': 'http://ndr-ndr2-nds-mp3.akacast.akamaistream.net/7/400/252763/v1/gnl.akacast.akamaistream.net/ndr_ndr2_nds_mp3',
	'title': 'NDR 2',
	'country': 'Germany',
	'genre': 'Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s17492q.png'
}, {
	'url': 'http://199.217.118.9:7916/;',
	'title': 'Radio Futura FM',
	'country': 'Uruguay',
	'genre': 'Top 40, Pop, Modern Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s50028q.png'
}, {
	'url': 'http://1live.akacast.akamaistream.net/7/706/119434/v1/gnl.akacast.akamaistream.net/1live',
	'title': '1Live - junge Radio WDR',
	'country': 'Germany',
	'genre': 'Euro Hits',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25260q.png'
}, {
	'url': 'http://1live-diggi.akacast.akamaistream.net/7/965/119435/v1/gnl.akacast.akamaistream.net/1live-diggi',
	'title': '1Live diggi',
	'country': 'Germany',
	'genre': 'Electronic, Dance, Hip hop, Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s45087q.png'
}, {
	'url': 'http://shoutmedia.abc.net.au:10426/;',
	'title': 'Triple J',
	'country': 'Australia',
	'genre': 'Modern Rock, Hip Hop, Indie',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25508q.png'
}, {
	'url': 'http://master.streamonomy.com:80/penthouse',
	'title': 'The Penthouse',
	'country': 'USA',
	'genre': 'Easy Listening',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s88474q.png'
}, {
	'url': 'http://stream.growradio.org:8000/high-stream',
	'title': 'Grow Radio',
	'country': 'USA',
	'genre': 'College Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s133382q.png'
}, {
	'url': 'http://buecrplb01.cienradios.com.ar/Mitre790.mp3',
	'title': 'Radio Mitre',
	'country': 'Argentina',
	'genre': 'Soccer, News',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25151q.png'
}, {
	'url': 'http://3653.live.streamtheworld.com:3690/CONTINENTAL_SC',
	'title': 'Radio Continental AM',
	'country': 'Argentina',
	'genre': 'Spanish Spoken, Sports Spoken',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25844q.png'
}, {
	'url': 'http://knight.wavestreamer.com:9544/;',
	'title': 'Capital Business Radio',
	'country': 'Spain',
	'genre': 'News, Economy',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s213366q.png'
}, {
	'url': 'http://escucha.gestionaradio.com:8000/live.mp3',
	'title': 'Gestiona Radio National',
	'country': 'Spain',
	'genre': 'Economy, Business',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s117045q.png'
}, {
	'url': 'http://streamlky.alsolnet.com:8270/sc_rad1',
	'title': 'RNA Radio Nacional',
	'country': 'Argentina',
	'genre': 'Spanish',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s44800q.png'
}, {
	'url': 'http://shoutcast3.hardcoreradio.nl/;',
	'title': 'Masters of Hardcore Radio',
	'country': 'Netherlands',
	'genre': 'Hardcore',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s111956q.png'
}, {
	'url': 'http://icecast.omroep.nl/3fm-bb-mp3',
	'title': '3FM',
	'country': 'Netherlands',
	'genre': 'Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s6707q.png'
}, {
	'url': 'http://stream-uk1.radioparadise.com/mp3-128',
	'title': 'Radio Paradise',
	'country': 'USA',
	'genre': 'Experimental, Modern Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s13606q.png'
}, {
	'url': 'http://icecast.omroep.nl/radio6-bb-mp3',
	'title': 'Radio 6',
	'country': 'Netherlands',
	'genre': 'Soul, Jazz',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s6705q.png'
}, {
	'url': 'http://82.201.100.9:8000/WEB08_WEB_MP3',
	'title': 'RTL Lounge',
	'country': 'Netherlands',
	'genre': 'Smooth Jazz, Soul, Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s115725q.png'
}, {
	'url': 'http://cimxfm-mp3.akacast.akamaistream.net/7/632/102120/v1/astral.akacast.akamaistream.net/cimxfm-mp3',
	'title': '89X',
	'country': 'Canada',
	'genre': 'Modern Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s31189q.png'
}, {
	'url': 'http://onair20.xdevel.com:8014/;',
	'title': 'Radio Subasio',
	'country': 'Italy',
	'genre': 'Pop, Love songs',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s18576q.png'
}, {
	'url': 'http://fm.ideastations.org/wcvehd1',
	'title': 'WCVE-FM',
	'country': 'USA',
	'genre': 'National News, Classic, Jazz',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s28089q.png'
}, {
	'url': 'http://out1.cmn.icy.abacast.com/wbqk-wbqkfm-64',
	'title': 'WBQK',
	'country': 'USA',
	'genre': 'Classic',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s0q.png'
}, {
	'url': 'http://whrv.mediaplayer.whro.org/128',
	'title': 'WHRV',
	'country': 'USA',
	'genre': 'National News, World',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s29424q.png'
}, {
	'url': 'http://8703.live.streamtheworld.com/WRIFFMMOBILE_SC',
	'title': 'WRIF',
	'country': 'USA',
	'genre': 'Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s22422q.png'
}, {
	'url': 'http://97.107.138.223:9000/stream',
	'title': 'WALTRadio',
	'country': 'Canada',
	'genre': 'Celtic',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s187627q.png'
}, {
	'url': 'http://mp3.live.tv-radio.com/franceinfo/all/franceinfo.mp3',
	'title': 'France Info',
	'country': 'France',
	'genre': 'Spoken, National News',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s9948q.png'
}, {
	'url': 'http://listen.radionomy.com/clubcardradio',
	'title': 'Club Card Radio',
	'country': 'Netherlands',
	'genre': 'House',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s145212q.png'
}, {
	'url': 'http://audio-mp3.ibiblio.org:8000/wcpe.mp3',
	'title': 'WCPE',
	'country': 'USA',
	'genre': 'Classical, Public',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s27997q.png'
}, {
	'url': 'http://tx.whatson.com/icecast.php?i=hitslow.mp3',
	'title': 'The Hits Radio',
	'country': 'United Kingdom',
	'genre': 'Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s97621q.png'
}, {
	'url': 'http://adwzg4.tdf-cdn.com/8946/nrj_166007.mp3',
	'title': 'ENERGY Wien',
	'country': 'Austria',
	'genre': 'Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s9211q.png'
}, {
	'url': 'http://lyd.nrk.no/nrk_radio_mp3_mp3_m',
	'title': 'NRK Mp3',
	'country': 'Norway',
	'genre': 'Electronic, Hip hop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25537q.png'
}, {
	'url': 'http://icy2.abacast.com/mainline-wikzmp3-32',
	'title': 'Mix 95.1',
	'country': 'USA',
	'genre': 'Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s29572q.png'
}, {
	'url': 'http://174.37.159.206:8032/yosoy.ogg',
	'title': 'Yo Soy Love!',
	'country': 'Argentina',
	'genre': 'Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s189841q.png'
}, {
	'url': 'http://stream.us.gslb.liquidcompass.net/WCMCFMMP3?dma=0&ats=1',
	'title': 'ESPN The Fan',
	'country': 'USA',
	'genre': 'Sports',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s28925q.png'
}, {
	'url': 'http://67.214.180.105:8002/;',
	'title': 'Trance Pulse FM Dublin',
	'country': 'Ireland',
	'genre': 'Trance',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s124826q.png'
}, {
	'url': 'http://stream.sbsradio.no:8000/radionorge.mp3',
	'title': 'Radio Norge',
	'country': 'Norway',
	'genre': 'Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s84118q.png'
}, {
	'url': 'http://broadcast.infomaniak.net:80/radionova-high.mp3',
	'title': 'Radio Nova',
	'country': 'France',
	'genre': 'Modern Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s17696q.png'
}, {
	'url': 'http://s4.total-streaming.com:9150/;',
	'title': 'Audio Ink Radio',
	'country': 'USA',
	'genre': 'Modern Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s144538q.png'
}, {
	'url': 'http://kera-ice.streamguys.us/kxtlive128',
	'title': 'KXT',
	'country': 'USA',
	'genre': 'AAA',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s26180q.png'
}, {
	'url': 'http://public-radio1.internode.on.net:8002/114',
	'title': 'Triple R',
	'country': 'Australia',
	'genre': 'Indie, Community',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s18517q.png'
}, {
	'url': 'http://http-live.sr.se/p4stockholm-mp3-64',
	'title': 'P4 Stockholm',
	'country': 'Sweden',
	'genre': 'Pop, Sports, Local',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s47341q.png'
}, {
	'url': 'http://pub6.di.fm/di_trance',
	'title': 'DI Trance',
	'country': 'USA',
	'genre': 'Trance',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s50996q.png'
}, {
	'url': 'http://pub6.di.fm/di_breaks',
	'title': 'DI Breaks',
	'country': 'USA',
	'genre': 'Breakbeats',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s50996q.png'
}, {
	'url': 'http://81.19.85.197:80/echo.mp3',
	'title': 'Echo of Moscow',
	'country': 'Russia',
	'genre': 'National News, Politics, Culture',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s8735q.png'
}, {
	'url': 'http://tuner.gayfm.de/;',
	'title': 'GayFM',
	'country': 'Germany',
	'genre': 'Electronic, Dance, Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s96482q.png'
}, {
	'url': 'http://md.lagrosseradio.info:8364/;',
	'title': 'La Grosse Radio Reggae',
	'country': 'France',
	'genre': 'Reggae, Dancehall, African Rhythms',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s110929q.png'
}, {
	'url': 'http://1721.live.streamtheworld.com:80/CLASSHIPHOP_S02A_AAC_SC',
	'title': 'RadioIO Classic Hip Hop',
	'country': 'USA',
	'genre': 'Old School',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s45224q.png'
}, {
	'url': 'http://rmfstream3.interia.pl:8003/rmf_fm',
	'title': 'RMF FM',
	'country': 'Poland',
	'genre': 'Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s1217q.png'
}, {
	'url': 'http://chom-mp3.akacast.akamaistream.net/7/996/102120/v1/astral.akacast.akamaistream.net/chom-mp3',
	'title': 'CHOM',
	'country': 'Canada',
	'genre': 'Classic Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s31168q.png'
}, {
	'url': 'http://2QMTL0.akacast.akamaistream.net:80/7/953/177387/v1/rc.akacast.akamaistream.net/2QMTL0',
	'title': 'Premiere Montreal',
	'country': 'Canada',
	'genre': 'National News',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s31098q.png'
}, {
	'url': 'http://sc3.sjc.llnw.net/stream/kcrw_music',
	'title': 'KCRW Eclectic24',
	'country': 'USA',
	'genre': 'Experimental',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25510q.png'
}, {
	'url': 'http://mp3.streampower.be/radio1-mid.mp3',
	'title': 'VRT Radio 1',
	'country': 'Belgium',
	'genre': 'Spoken, National News',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s18555q.png'
}, {
	'url': 'http://www.radiogalere.org:8080/galere.mp3',
	'title': 'Radio Galere',
	'country': 'France',
	'genre': 'Adult Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s50525q.png'
}, {
	'url': 'http://82.165.148.218:8000/albayane.mp3',
	'title': 'Radio Al Bayane',
	'country': 'Cote d\'Ivore',
	'genre': 'Islamitic',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s89579q.png'
}, {
	'url': 'http://listen.radionomy.com/best-of-slow',
	'title': 'Best of Slow',
	'country': 'France',
	'genre': 'Love Song',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s160974q.png'
}, {
	'url': 'http://listen.radionomy.com/radio-bach',
	'title': 'Radio Bach',
	'country': 'France',
	'genre': 'Classical',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s167936q.png'
}, {
	'url': 'http://mp3.live.tv-radio.com/fip/all/fiphautdebit.mp3',
	'title': 'FIP',
	'country': 'France',
	'genre': 'Experimental, French',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s15200q.png'
}, {
	'url': 'file=http://mp3.live.tv-radio.com/francemusique/all/francemusique-32k.mp3',
	'title': 'France Musique',
	'country': 'France',
	'genre': 'Classical, Jazz, Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s15198q.png'
}, {
	'url': 'http://mp3.live.tv-radio.com/franceculture/all/franceculture-32k.mp3',
	'title': 'France Culture',
	'country': 'France',
	'genre': 'French',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s2442q.png'
}, {
	'url': 'http://mp3.live.tv-radio.com/franceinter/all/franceinter-32k.mp3',
	'title': 'France Inter',
	'country': 'France',
	'genre': 'Spoken',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s24875q.png'
}, {
	'url': 'http://str20.creacast.com:443/;',
	'title': 'Radio Classique',
	'country': 'France',
	'genre': 'Classic, French',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25732q.png'
}, {
	'url': 'http://162.251.160.2:80/achhigh',
	'title': 'Absolute Country',
	'country': 'USA',
	'genre': 'Country',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s151792q.png'
}, {
	'url': 'http://vipicecast.yacast.net/rmc',
	'title': 'RMC',
	'country': 'France',
	'genre': 'Spoken',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s16416q.png'
}, {
	'url': 'http://icy1.abacast.com/entravision-indiemp3-48',
	'title': 'Indie 103.1',
	'country': 'USA',
	'genre': 'Indie',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s35486q.png'
}, {
	'url': 'http://mobile.customchannels.net/wttsfm-mp3',
	'title': 'WTTS',
	'country': 'USA',
	'genre': 'AAA',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s23299q.png'
}, {
	'url': 'http://87.118.64.218:8033/;',
	'title': 'Radio Mi Amigo',
	'country': 'Germany',
	'genre': 'Pop, Oldies, Schlager',
	'thumb': 'http://static.skynetblogs.be/media/4087/dyn001_original_250_109_pjpeg__11cea91d15cc0e346b9dafda15caefb6.2.jpg'
}, {
	'url': 'http://rbb.ic.llnwd.net/stream/rbb_radioeins_mp3_m_a',
	'title': 'Radio Eins von RBB',
	'country': 'Germany',
	'genre': 'Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25111q.png'
}, {
	'url': 'http://www.ophanim.net:7900/;',
	'title': 'WJEJ',
	'country': 'USA',
	'genre': 'Local',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s29805q.png'
}, {
	'url': 'http://listen.radionomy.com/weblounge',
	'title': 'Web Lounge',
	'country': 'USA',
	'genre': 'Easy Listening, Lounge',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s123087q.png'
}, {
	'url': 'http://icecast4.play.cz/evropa2-64.mp3',
	'title': 'Evropa 2',
	'country': 'Czech Republic',
	'genre': 'Pop, Top 40',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s15666q.png'
}, {
	'url': 'http://radioava.dns2go.com:88/broadwave.m3u',
	'title': 'Radio AVA',
	'country': 'Sweden',
	'genre': 'Electronic, Dance',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s60239q.png'
}, {
	'url': 'http://rfe-channel-21.akacast.akamaistream.net/7/989/229671/v1/ibb.akacast.akamaistream.net/rfe_channel_21.mp3',
	'title': 'Radio Farda',
	'country': 'Iran',
	'genre': 'National News',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s36089q.png'
}, {
	'url': 'http://173.236.47.154:9000',
	'title': 'Radio Navahang',
	'country': 'USA',
	'genre': 'Pop, Top 40',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s148674q.png'
}, {
	'url': 'http://stardust.wavestreamer.com:8062/live',
	'title': 'Birdsong FM',
	'country': 'UK',
	'genre': 'Special',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s92182q.png'
}, {
	'url': 'http://80.237.158.40/890rtl-128.mp3',
	'title': '89.0 RTL',
	'country': 'Germany',
	'genre': 'Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s6642q.png'
}, {
	'url': 'http://ndr-n-joy-mp3.akacast.akamaistream.net/7/665/273752/v1/gnl.akacast.akamaistream.net/ndr_n-joy_mp3',
	'title': 'N-JOY',
	'country': 'Germany',
	'genre': 'Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25531q.png'
}, {
	'url': 'http://188.94.98.227/radio21.mp3',
	'title': 'Radio 21',
	'country': 'Germany',
	'genre': 'Classic Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s84550q.png'
}, {
	'url': 'http://itori.animenfo.com:443/;',
	'title': 'AnimeNfo Radio',
	'country': 'Japan',
	'genre': 'Anime, J-Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s54119q.png'
}, {
	'url': 'http://eu2.fastcast4u.com:4072/1/',
	'title': 'B.T.E. Radio',
	'country': 'USA',
	'genre': 'Pop, Hip Hop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s228630q.png'
}, {
	'url': 'http://doubledownradio.com/stream/hi_aac.m3u',
	'title': 'Doubledown Radio',
	'country': 'USA',
	'genre': 'Pop, Punk, Dance',
	'thumb': 'http://dustdevilmedia.com/Graphics/DDR%20Banner.jpg'
}, {
	'url': 'http://leinehertz01.htp.net:8000/;',
	'title': 'LeineHertz 106einhalb',
	'country': 'Germany',
	'genre': 'Adult Rock, Community',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s111794q.png'
}, {
	'url': 'http://shoutmedia.abc.net.au:10428/;',
	'title': 'Double J',
	'country': 'Australia',
	'genre': 'Modern Rock, Indie, Experimental',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s20270q.png'
}, {
	'url': 'http://shoutmedia.abc.net.au:10422/;',
	'title': 'ABC Classic FM',
	'country': 'Australia',
	'genre': 'Classical, Jazz',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s53416q.png'
}, {
	'url': 'http://edge.live.mp3.mdn.newmedia.nacamar.net/klassikradio128/livestream.mp3',
	'title': 'Klassik Radio',
	'country': 'Germany',
	'genre': 'Classical',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25028q.png'
}, {
	'url': 'http://edge.live.mp3.mdn.newmedia.nacamar.net/radioffn/livestream.mp3',
	'title': 'Radio FFN',
	'country': 'Germany',
	'genre': 'Hot AC',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s8954q.png'
}, {
	'url': 'http://65.254.54.218:8600/;',
	'title': 'Radio Rock & Pop',
	'country': 'Paraguay',
	'genre': 'Rock, Pop Latino',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s18629q.png'
}, {
	'url': 'http://ice.somafm.com/poptron',
	'title': 'SomaFM: PopTron',
	'country': 'USA',
	'genre': 'Indie, Electronic Dance',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s112350q.png'
}, {
	'url': 'http://www.omegaingenieria.com:8022/;',
	'title': 'Grupera',
	'country': 'Mexico',
	'genre': 'Grupera, Banda, Mexican',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s91224q.png'	
}, {
	'url': 'http://adwzg3.tdf-cdn.com/8470/nrj_165631.mp3',
	'title': 'NRJ',
	'country': 'France',
	'genre': 'French, Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s2339q.png'
}, {
	'url': 'http://listen.to.techno4ever.net/dsl/mp3',
	'title': 'Techno4Ever Main',
	'country': 'Germany',
	'genre': 'Techno',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s55002q.png'
}, {
	'url': 'http://c22033-ls.i.core.cdn.streamfarm.net/T3R6XGogC9922033/22033mdr/live/app2128740352/w2128904194/live_de_56.mp3',
	'title': 'MDR Jump',
	'country': 'Germany',
	'genre': 'Pop, Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s6634q.png'
}, {
	'url': 'http://209.105.232.177:9996/;',
	'title': 'Kizomba Station',
	'country': 'Netherlands',
	'genre': 'Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s209511q.png'
}, {
	'url': 'http://46.4.73.140:8096/;',
	'title': 'Music Art Club',
	'country': 'Greece',
	'genre': 'Experimental, Modern Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s103081q.png'
}, {
	'url': 'http://srv12.blitz-stream.de:80/;',
	'title': 'Horbuch FM',
	'country': 'Germany',
	'genre': 'Pop, Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s6634q.png'
}, {
	'url': 'http://rbb-mp3-fritz-m.akacast.akamaistream.net/7/799/292093/v1/gnl.akacast.akamaistream.net/rbb_mp3_fritz_m',
	'title': 'Fritz vom RBB',
	'country': 'Germany',
	'genre': 'Pop, Rock, Soul',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25005q.png'
}, {
	'url': 'http://7bvan0.akacast.akamaistream.net/7/286/177417/v1/rc.akacast.akamaistream.net/7BVAN0',
	'title': 'ICI Musique Montreal',
	'country': 'Canada',
	'genre': 'Jazz, Classical',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s1917q.png'
}, {
	'url': 'http://stream.delahaze.fm:8000/live',
	'title': 'Delahaze FM',
	'country': 'Romania',
	'genre': 'Lounge',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s210303q.png'
}, {
	'url': 'http://s9.voscast.com:8660/;',
	'title': 'EclecticFM',
	'country': 'Romania',
	'genre': 'Experimental',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s214966q.png'
}, {
	'url': 'http://live.prviradio.hr:8000/prviradiohr',
	'title': 'Prvi Radio Zagreb',
	'country': 'Croatia',
	'genre': '',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s197430q.png'
}, {
	'url': 'http://rs20.stream24.org:8200/stream',
	'title': 'Peppermint FM',
	'country': 'Germany',
	'genre': 'Funk, Hip hop, House',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s78229q.png'
}, {
	'url': 'http://stream1.neston.hu/neston',
	'title': 'Radio Neston',
	'country': 'Hungary',
	'genre': '',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s148939q.png'
}, {
	'url': 'http://stream002.radio.hu/mr2.mp3',
	'title': 'MR2 Petofi',
	'country': 'Hungary',
	'genre': 'Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s6672q.png'
}, {
	'url': 'http://online.jazzy.hu/jazzy64.mp3',
	'title': '90.9 Jazzy',
	'country': 'Hungary',
	'genre': 'Smooth Jazz',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s87189q.png'
}, {
	'url': 'http://allclassical-ice.streamguys.com/ac96kmp3',
	'title': 'All Classical Portland',
	'country': 'USA',
	'genre': 'Classical',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s31824q.png'
}, {
	'url': 'http://listen.radionomy.com/acoustic-fm',
	'title': 'Acoustic FM',
	'country': 'Netherlands',
	'genre': 'Folk, Rock, Acoustic',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s134845q.png'
}, {
	'url': 'http://107.155.111.234:8310/;',
	'title': 'Big R Radio 80s Metal FM',
	'country': 'USA',
	'genre': 'Metal, AOR, 80s',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s48973q.png'
}, {
	'url': 'http://stream-ice.mtgradio.com:8080/stat_bandit',
	'title': 'Bandit FM',
	'country': 'Sweden',
	'genre': 'Modern Rock, Metal',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s25063q.png'
}, {
	'url': 'http://194.16.21.227/rock_se_mp3',
	'title': 'Rock Klassiker',
	'country': 'Sweden',
	'genre': 'Classic Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s10668q.png'
}, {
	'url': 'http://icy3.abacast.com/powell-kqnufmmp3-64',
	'title': 'Q102',
	'country': 'USA',
	'genre': 'Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s26860q.png'
}, {
	'url': 'http://service.pop-stream.de:4000/;',
	'title': 'AGF Radio',
	'country': 'Germany',
	'genre': 'Variete',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s148345q.png'
}, {
	'url': 'http://radio.nolife-radio.com:8000/;',
	'title': 'No Life Radio',
	'country': '',
	'genre': 'Video Game Music',
	'thumb': ''
},{
	'url': 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_intl_he_radio1_q?s=1413782606&e=1413797006&h=cd896a62f69bc7272416202ffab5883b',
	'title': 'BBC Radio 1',
	'country': 'United Kingdom',
	'genre': 'Top 40, Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s24939q.png'	
},{
	'url': 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_intl_lc_6music_p?s=1413178627&e=1413193027&h=1e408c5a7a08afaee6cbbe2054a98831Title1=No',
	'title': 'BBC Radio 6',
	'country': 'United Kingdom',
	'genre': 'Pop',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s44491q.png'
},{
	'url': 'http://mp3.radio-reeperbahn.de',
	'title': 'Radio Reeperbahn',
	'country': 'Germany',
	'genre': 'Top 40, Pop, German',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s140743q.png'
},{
	'url': 'http://99.198.118.250:8037/stream',
	'title': 'WOMR',
	'country': 'USA',
	'genre': 'Community, Public',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s21750q.png'
},{
	'url': 'http://qed.ice.lbdns-streamguys.com/kqedradio',
	'title': 'KQED-FM',
	'country': 'USA',
	'genre': 'National News, Public',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s34804q.png'
},{
	'url': 'http://radio.100fm.by:8000/100fm',
	'title': 'Baranovichi 100 FM',
	'country': 'Belarus',
	'genre': 'City news, culture, music',
	'thumb': 'http://radiocaster.projectfive.nl/images/radio_belarus.png'
},{
	'url': 'http://89.149.61.58:8006/stream-32.aac',
	'title': 'Strong Radio',
	'country': 'Romania',
	'genre': '',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s231555q.png'
},{
	'url': 'http://listen.ntslive.co.uk/stream',
	'title': 'NTS Radio',
	'country': 'United Kingdom',
	'genre': '',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s150238q.png'
},{
	'url': 'http://icecast.commedia.org.uk:8000/bangradio.mp3',
	'title': 'Bang Radio',
	'country': 'United Kingdom',
	'genre': 'Dancehall, Old School, Soul',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s114267q.png'
},{
	'url': 'http://128.208.34.80:8000/;',
	'title': 'KUOW-FM',
	'country': 'USA',
	'genre': 'National news, spoken, public',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s35932q.png'
},{
	'url': 'http://50.7.129.122:8249/;',
	'title': 'Otvoreni Radio',
	'country': 'Croatia',
	'genre': 'Variety, Top 40, Pop, Rock',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s18415q.png'
},{
	'url': 'http://ice.stream.frequence3.net/frequence3-128.mp3',
	'title': 'Frequence 3',
	'country': 'France',
	'genre': 'Top 40, Pop',
	'thumb': 'http://frequence3.net/bundles/frequence3frontend/images/logo-dark.png'
},{
	'url': 'http://192.240.97.69:9240/;',
	'title': 'WNNR Naturally Nude Radio',
	'country': 'USA',
	'genre': '',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s230713q.png'	
},{
	'url': 'http://noisefm.ru:8000/play_96',
	'title': 'Noise FM',
	'country': 'Russia',
	'genre': 'Dubstep, Trance, Drum n Bass',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s191972q.png'	
},{
	'url': 'http://radio.sodreuruguay.com:9170/;',
	'title': 'Babel FM',
	'country': 'Uruguay',
	'genre': 'Spanish',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s55260q.png'
},{
	'url': 'http://Fradio1.oceanofm.com:8010/;',
	'title': 'Oceano FM',
	'country': 'Uruguay',
	'genre': 'Spanish',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s1136q.png'
},{
	'url': 'http://5.135.182.169:8014/;',
	'title': 'Deeptechno.fm',
	'country': 'Germany',
	'genre': 'Techno',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s196835q.png'
},{
	'url': 'rtmp://103fm-s.nsacdn.com/103fm_Live99Repeat/Live99',
	'title': 'Eco 99 fm',
	'country': 'Israel',
	'genre': 'Pop, Environment',
	'thumb': 'http://d1i6vahw24eb07.cloudfront.net/s8712q.png'
}];


var supportedPhone = false;
function home(){
	if(device.android()){ supportedPhone = true; $('.connect.segment').remove(); $('.searchStation').css('width','100%'); $('#search').css({'background':'#ececec','margin-bottom':'8px'}); }
	for(i in media){ $('#stations').append(stationHtml(i,media[i])); }
	$('#stations').append('<div class="station stationMissing transition" onclick="missingStation(\'open\');"><div class="image transition" style="background-image:url(\'../images/watermark.png\');" /><div class="titleBar transition"><div class="name ellipsis transition">Missing a station?</div></div></div>');
	(function() {
		[].slice.call(document.querySelectorAll('.si-icon')).forEach(function(el){ var svgicon = new svgIcon(el,svgIconConfig); });
	})();
	
	$('#search').on('keyup',function(){
		if($('#search').val()){
			var rg = new RegExp($('#search').val(),'i');
			$('.station').not('.stationMissing').each(function() {
				($.trim($('.titleBar',this).text()).search(rg) == -1) ? $(this).hide() : $(this).show();
			});
		} else { $('.station:hidden').show(); }
	}).on('search',function(){
		if(!$(this).val()){ $('.station:hidden').show(); }
	});
}

function phonePlayer(val){
	var medObj = media[val];
	$('video').attr('poster',medObj.thumb);
	$('video source').attr('src',medObj.url);
	$('video').load();
}

function missingStation(action){
	if(action == 'open'){
		$('.overlay').fadeIn();
		$('.overlay h3.successsubmit').addClass('hide'); $('.overlay input, .overlay .button, .overlay h3.regulartext').show().removeClass('hide');
	} else if(action == 'close'){
		$('.overlay').fadeOut();
	} else if(action == 'submit'){
		$('#tuneinlink,#email').removeClass('error');
		var emailpattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
		if(!$('#tuneinlink').val()){ $('#tuneinlink').addClass('error'); return false; }
		else if(!$('#email').val() || !emailpattern.test($('#email').val())){ $('#email').addClass('error'); return false; }
		else {
			$.ajax({
				url : 'writeLog.php',
				type : 'POST',
				data : 'radiolink=' + $('#tuneinlink').val() + '&email=' + $('#email').val(),
				success: function(response){
					if(response == 'success'){ $('.overlay h3.successsubmit').removeClass('hide'); $('.overlay input, .overlay .button, .overlay h3.regulartext').slideUp(); }
				}
			}); 
		}
	}
}
function stationHtml(nr,item){
	var sHtml = '<section class="station transition" data-nr="' + nr + '" data-url="' + item.url + '" onclick="player(\'open\',this);" itemscope itemtype="http://schema.org/MediaObject">';
    sHtml+='<div class="controls transition">';
	sHtml+='</div>';
	sHtml+='<div class="image transition" itemprop="image" style="background-image:url(\'' + item.thumb + '\');" />';
	sHtml+='<div class="titleBar transition">';
	sHtml+='<div class="name ellipsis transition" itemprop="name">' + item.title + '</div>';
	sHtml+='<div class="subtitle"><span itemprop="genre">' + item.genre + '</span> - ' + item.country + '</div>';
	sHtml+='<span class="iconSpace transition" />';
	sHtml+='<span class="si-icon si-icon-play" data-icon-name="play" onclick="player(\'togglePlaystate\',this);"></span>';
    sHtml+='<span class="c_icon white connectLink doConnect point" onclick="player(\'connect\');"></span>';
    sHtml+='<span class="c_icon error connectLink noDevices"></span>';
	sHtml+='</div>';
	sHtml+='</section>';
	return sHtml;
}

function player(action,elem){
	switch(action){
		case 'togglePlaystate':
			if($(elem).closest('.station').hasClass('playing')){
				$(elem).closest('.station').removeClass('tapped');
				setTimeout(function(){ $(elem).closest('.station').attr('onclick','player(\'open\',this)'); },1000);
				if(!currentMediaSession) 
					return;
				currentMediaSession.stop(null,'',onError);
			} else { loadMedia($(elem).closest('.station').data('nr')); }
			$(elem).closest('.station').toggleClass('playing');
			break;
            
        case 'connect':
			launchApp();
            break;
			
		case 'open':
			if(supportedPhone){
				window.location.href = '/phone/' + $(elem).data('nr');
				return false;
			}
			$(elem).attr('onclick','').siblings().removeClass('tapped').attr('onclick','player(\'open\',this)');
			$(elem).addClass('tapped');
			break;
			
		case 'mute':
			if($(elem).hasClass('muted')){
				$('.muteText').text('Mute');
				session.setReceiverVolumeLevel(1,'',onError);
			} else {
				session.setReceiverMuted(true,'',onError);
				$('.muteText').text('Unmute');
			}
			$(elem).toggleClass('muted');
			break;
	}
}

if (!chrome.cast || !chrome.cast.isAvailable) {
	setTimeout(initializeCastApi, 1000);
}

function initializeCastApi() {
	var sessionRequest = new chrome.cast.SessionRequest('B32437A9');
	var apiConfig = new chrome.cast.ApiConfig(sessionRequest, sessionListener, receiverListener, chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED);

	chrome.cast.initialize(apiConfig, onInitSuccess, onError);
}
function onInitSuccess() {
	$('body').attr('class', 'scanningDevices');
}

function onError(response){
	console.log(response);
	$('body').attr('class', 'genericError');
}

function onSuccess(message){
	console.log(message);
}


function stopApp(){ session.stop(onStopAppSuccess, onError); $('.station.tapped').removeClass('tapped'); $('.station.playing .si-icon-play').trigger('click'); }
function onStopAppSuccess(){ $('body').attr('class','doConnect'); $('html').removeClass('PLAYING'); }


// check voor huidige sessies
function sessionListener(e) {
	session = e;
	// check of media speelt
	if (session.media.length != 0){
		onMediaDiscovered('onRequestSessionSuccess_', session.media[0]);
		if (e.receiver.volume.muted) {
			$('.muteControl .si-icon-volume').trigger('click');
		}
		if($('.station[data-url="' + e.media[0].media.contentId + '"]').length){
			var station = $('.station[data-url="' + e.media[0].media.contentId + '"]');
			station.trigger('click').addClass('playing');
			$('.si-icon-play',station).addClass('si-icon-reverse').empty();
			var icon = $(station[0]).find('.si-icon-play')[0];
			var svgicon = new svgIcon(icon,svgIconConfig);
		}
	}
	$('body').attr('class', 'connected');
	$('.insertName').text(e.receiver.friendlyName);
	session.addMediaListener(onMediaDiscovered.bind(this, 'addMediaListener'));
	session.addUpdateListener(sessionUpdateListener.bind(this));
}


function sessionUpdateListener(isAlive) {
  var message = isAlive ? 'Session Updated' : 'Session Removed';
  message += ': ' + session.sessionId;
  console.log(message);
  if (!isAlive) {
    session = null;
    onStopAppSuccess();
    if($('.station.playing').length){
          $('.station.playing').removeClass('tapped');
          setTimeout(function(){ $('.station.playing').removeClass('playing').attr('onclick','player(\'open\',this)'); },1000);
          currentMediaSession.stop(null,'',onError);
          $('body').attr('class','doConnect');
    }
  }
}

/**
 * receiver listener during initialization
 */
function receiverListener(e) {
  if(e === 'available' ){
    console.log("receiver found");
    $('body').attr('class','doConnect');
  }
  else {
    console.log("receiver list empty");
    $('body').attr('class','noDevices');
    
  }
}

function launchApp() {
	console.log("launching app...");
	$('body').attr('class','connecting');
	chrome.cast.requestSession(onRequestSessionSuccess, onLaunchError);
}


function onRequestSessionSuccess(e) {
  console.log("session success: " + e.sessionId);
  session = e;
  $('.insertName').text(e.receiver.friendlyName);
  $('body').attr('class','connected');
}

function onLaunchError(response) {
	console.log("launch error");
	$('body').attr('class','connecterror');
}

function loadMedia(currentMediaIndex) {
	if (!session) {
		console.log("no session");
		return;
	}

	console.log("loading..." + media[currentMediaIndex]['url']);
	var mediaInfo = new chrome.cast.media.MediaInfo(media[currentMediaIndex]['url']);
	mediaInfo.metadata = new chrome.cast.media.MusicTrackMediaMetadata();
	mediaInfo.metadata.metadataType = chrome.cast.media.MetadataType.MUSIC_TRACK;
	mediaInfo.metadata.title = media[currentMediaIndex]['title'];
	if (media[currentMediaIndex]['thumb'].substr(0, 4) != 'http') {
		mediaInfo.metadata.images = [{
			'url': 'http://radiocaster.projectfive.nl' + media[currentMediaIndex]['thumb']
		}];
	} else {
		mediaInfo.metadata.images = [{
			'url': media[currentMediaIndex]['thumb']
		}];
	}
	mediaInfo.metadata.artist = media[currentMediaIndex]['genre'];
	mediaInfo.metadata.albumName = media[currentMediaIndex]['country'];
	mediaInfo.metadata.releaseDate = '2014';
	mediaInfo.contentType = 'audio/mp3';

	var request = new chrome.cast.media.LoadRequest(mediaInfo);
	request.autoplay = true;
	request.currentTime = 0;
	session.loadMedia(request, onMediaDiscovered.bind(this, 'loadMedia'), onMediaError.bind(this));

}

// callback on success for loading media
function onMediaDiscovered(how, mediaSession) {
  console.log("new media session ID:" + mediaSession.mediaSessionId);
  currentMediaSession = mediaSession;
  mediaSession.addUpdateListener(onMediaStatusUpdate);
  mediaCurrentTime = currentMediaSession.currentTime;
}

// callback on media loading error
function onMediaError(e) {
  console.log("media error");
}

function onMediaStatusUpdate(isAlive){
	$('html').attr('class',currentMediaSession.playerState);
}

function mediaCommandSuccessCallback(info) {
  console.log(info);
}

/*! device.js 0.1.58 */
(function(){var a,b,c,d,e,f,g,h,i,j;a=window.device,window.device={},c=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return d("iphone")},device.ipod=function(){return d("ipod")},device.ipad=function(){return d("ipad")},device.android=function(){return d("android")},device.androidPhone=function(){return device.android()&&d("mobile")},device.androidTablet=function(){return device.android()&&!d("mobile")},device.blackberry=function(){return d("blackberry")||d("bb10")||d("rim")},device.blackberryPhone=function(){return device.blackberry()&&!d("tablet")},device.blackberryTablet=function(){return device.blackberry()&&d("tablet")},device.windows=function(){return d("windows")},device.windowsPhone=function(){return device.windows()&&d("phone")},device.windowsTablet=function(){return device.windows()&&d("touch")},device.fxos=function(){return(d("(mobile;")||d("(tablet;"))&&d("; rv:")},device.fxosPhone=function(){return device.fxos()&&d("mobile")},device.fxosTablet=function(){return device.fxos()&&d("tablet")},device.meego=function(){return d("meego")},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()||device.meego()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.portrait=function(){return 90!==Math.abs(window.orientation)},device.landscape=function(){return 90===Math.abs(window.orientation)},device.noConflict=function(){return window.device=a,this},d=function(a){return-1!==j.indexOf(a)},f=function(a){var b;return b=new RegExp(a,"i"),c.className.match(b)},b=function(a){return f(a)?void 0:c.className+=" "+a},h=function(a){return f(a)?c.className=c.className.replace(a,""):void 0},device.ios()?device.ipad()?b("ios ipad tablet"):device.iphone()?b("ios iphone mobile"):device.ipod()&&b("ios ipod mobile"):device.android()?device.androidTablet()?b("android tablet"):b("android mobile"):device.blackberry()?device.blackberryTablet()?b("blackberry tablet"):b("blackberry mobile"):device.windows()?device.windowsTablet()?b("windows tablet"):device.windowsPhone()?b("windows mobile"):b("desktop"):device.fxos()?device.fxosTablet()?b("fxos tablet"):b("fxos mobile"):device.meego()?b("meego mobile"):b("desktop"),e=function(){return device.landscape()?(h("portrait"),b("landscape")):(h("landscape"),b("portrait"))},i="onorientationchange"in window,g=i?"orientationchange":"resize",window.addEventListener?window.addEventListener(g,e,!1):window.attachEvent?window.attachEvent(g,e):window[g]=e,e()}).call(this);