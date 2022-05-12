console.log("lorem generator");

const text = [
    `Kogi hoodie flannel lo-fi, hella franzen blue bottle mixtape salvia 
    +1 celiac actually jianbing. Lomo leggings unicorn pitchfork. Four 
    loko man bun church-key enamel pin. VHS organic scenester glossier 
    vice, vaporware keffiyeh stumptown forage kinfolk truffaut kickstarter 
    listicle flexitarian put a bird on it. Banjo lyft yuccie normcore 
    authentic cliche. Cray blue bottle DIY godard, thundercats bicycle 
    rights pug master cleanse tacos lomo hoodie skateboard wayfarers 
    truffaut 90's. Selfies roof party intelligentsia mumblecore 3 wolf 
    moon mixtape dreamcatcher letterpress.`,

    `Craft beer +1 shoreditch hammock adaptogen pitchfork. Plaid pour-over 
    cloud bread, marfa kinfolk flexitarian artisan prism chambray truffaut 
    church-key lyft kickstarter mustache health goth. Etsy cornhole cliche 
    tattooed, tacos ethical sriracha lomo yes plz. Bicycle rights chambray 
    asymmetrical succulents, biodiesel knausgaard subway tile ramps swag 
    williamsburg salvia gochujang. Fixie drinking vinegar gochujang retro 
    everyday carry XOXO flexitarian four dollar toast. Hashtag kitsch 
    tattooed, yes plz vinyl helvetica taiyaki.`,

    `Whatever meggings drinking vinegar iceland gochujang. Migas microdosing 
    chicharrones, drinking vinegar air plant marfa butcher offal craft beer 
    leggings prism four dollar toast twee. Fixie deep v synth vape schlitz 
    kitsch. Kogi jianbing next level pitchfork trust fund artisan iceland 
    YOLO chicharrones helvetica lo-fi. Chambray ugh helvetica, franzen 
    tumeric kombucha direct trade cliche art party adaptogen cloud bread 
    beard af actually ennui. Vape knausgaard air plant drinking vinegar 
    asymmetrical.`,

    `VHS skateboard tumeric vice. Austin photo booth edison bulb shabby 
    chic. DIY iceland before they sold out, williamsburg dreamcatcher 
    four loko bitters freegan hoodie sustainable you probably haven't 
    heard of them pok pok. Artisan coloring book actually, selfies PBR&B
    mlkshk palo santo live-edge put a bird on it.`,

    `Meditation blog umami subway tile, shaman scenester flexitarian 
    iceland. Enamel pin sustainable affogato leggings iceland next level.
    Artisan air plant wolf, live-edge semiotics bitters scenester. 
     Franzen sustainable adaptogen chillwave, health goth coloring book
    iceland chambray. Hot chicken chillwave semiotics photo booth
    literally hashtag austin live-edge brooklyn palo santo squid
    drinking vinegar yes plz. 8-bit ethical fanny pack franzen.
    Biodiesel YOLO neutra vape.`,

    `Portland prism sartorial wayfarers PBR&B. Yes plz flannel schlitz 
    keytar DSA distillery direct trade palo santo four dollar toast forage 
    you probably haven't heard of them aesthetic retro polaroid. Humblebrag 
    craft beer authentic glossier copper mug knausgaard retro deep v 
    single-origin coffee beard adaptogen. Meditation ugh blog, XOXO yes 
    plz VHS flannel. Hammock godard yes plz, drinking vinegar chia food 
    truck messenger bag organic pickled ugh mlkshk lomo kitsch.`,

    `Unicorn you probably haven't heard of them pug humblebrag. Activated 
    charcoal green juice cold-pressed hot chicken air plant, shoreditch 
    aesthetic church-key. Health goth typewriter raw denim, hexagon YOLO 
    retro hammock pickled blog adaptogen four loko authentic. Poutine 
    etsy pug ethical direct trade cornhole lomo. Sriracha butcher vegan 
    blog taiyaki mlkshk. Pitchfork cloud bread irony, twee schlitz kinfolk 
    asymmetrical celiac.`,

    `Shaman slow-carb disrupt you probably haven't heard of them, gochujang 
    locavore hella lyft banh mi trust fund cardigan pour-over sustainable 
    hammock cloud bread. Twee raclette mumblecore blog, pabst knausgaard 
    8-bit sartorial sriracha la croix 3 wolf moon gentrify beard. Distillery 
    cardigan pop-up activated charcoal vinyl iceland. Ethical schlitz 
    kitsch lomo. Kitsch unicorn forage celiac, tousled pour-over offal 
    retro pork belly. Sustainable synth hot chicken, pour-over wolf next 
    level pickled echo park meggings.`,

    `3 wolf moon jean shorts affogato fam. Readymade chicharrones organic, 
    mlkshk chia artisan hammock neutra ennui listicle kinfolk glossier 
    praxis pinterest. Vinyl shabby chic helvetica butcher brooklyn, shaman 
    artisan air plant pinterest stumptown man braid. Poutine brooklyn forage 
    you probably haven't heard of them, meh drinking vinegar normcore 
    distillery truffaut keffiyeh. Sriracha everyday carry snackwave 
    mumblecore microdosing squid. Yuccie irony chillwave VHS authentic 
    flannel. Ethical chartreuse austin, art party gastropub messenger 
    bag tonx selvage.`,

    `Vinyl ethical chartreuse bitters gentrify. Knausgaard semiotics occupy 
    trust fund. Lyft synth ugh, viral hammock meh kogi hexagon polaroid 
    cardigan YOLO PBR&B chillwave literally. Affogato kombucha craft beer 
    banh mi slow-carb organic kale chips. Squid dreamcatcher VHS, taiyaki 
    cliche echo park hella migas sriracha. Portland af bushwick poke lyft, 
    schlitz semiotics scenester selvage raclette bespoke pok pok put a bird 
    on it.`
];


const form = document.querySelector(".lorem-form")
const numofpara = document.getElementById("numofpara")
const numofparaRange = document.getElementById("numofparaRange")
const result = document.querySelector(".lorem-text")

function syncParaNumbers(e){
    const value = e.target.value
    //console.log(value);
    numofpara.value = value
    numofparaRange.value = value
    
}

form.addEventListener("submit", e=> {
    e.preventDefault()
    const value = parseInt(numofpara.value)
    let tempText = text.slice(0, value)
    tempText = tempText.map(item => 
        `<p class="result">${item}</p>`).join("")
    //console.log(tempText);
    result.innerHTML = tempText
})

numofpara.addEventListener('input', syncParaNumbers)
numofparaRange.addEventListener('input', syncParaNumbers)