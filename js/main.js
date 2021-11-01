gsap.to("#img",{
    scrollTrigger : {
        scrub:0.5,
    },
    x : 1500,
    y : 500,
})

gsap.from("#wolf",{
    scrollTrigger : {
        scrub:0.5,
    },
    x : 100,
})

gsap.from("#castle",{
    scrollTrigger : {
        scrub:0.5,
    },
    x : -80,
})

gsap.to("#bats",{
    scrollTrigger : {
        scrub:0.5,
    },
    scale : 1.5,
})


const PICTURE_LIST = [
	"img01.jpg",
    "img02.jpg", 
    "img03.jpg", 
    "img04.jpg", 
    "img05.jpg",
    "img06.jpg",
    "img07.jpg",
    "img08.jpg",
    "img09.jpg",
    "img010.jpg",
    "img011.jpg",
    "img012.jpg",
    "img013.jpg",
    "img014.jpg",
    "img015.jpg",
    "img016.jpg",
    "img017.jpg",
    "img018.jpg"
]

const PROPERTIES = {
    location_1: {
        from: {opacity: 0, scale: 0.1, force3D: true},
        to: {duration: 1.5, scale: 2.2},
    },
    location_2: {
        from: {opacity: 0, scale: 0.1, force3D: true},
        to: {duration: 1.5, scale: 2.2},
    },
    localtion_3: {
        from: {opacity: 0, scale: 0.1, force3D: true},
        to: {duration: 1.5, scale: 2.2},
    }
}

const IMAGE_BASE_URL = "image/";
// MÉTODO PARA OCULTAR IMAGEN A PARTIR DE SU ID
function hideImage (id){
    const $img = document.getElementById(id) || null
    if($img)
        $img.style.opacity = 0
}

(function loadAnimeImages(){
    // VARIABLES
    const $content = document.getElementById("image-container")

    function add_buttons_gsap(el){
        document.querySelector("#play").onclick = () => el.play();
        document.querySelector("#pause").onclick = () => el.pause();
        document.querySelector("#resume").onclick = () => el.resume();
        document.querySelector("#reverse").onclick = () => el.reverse();
        document.querySelector("#restart").onclick = () => el.restart();
    }

    function init_process(T_LINE){
        // ORDENAR LA LISTA ALEATORIAMENTE
        PICTURE_LIST.sort(function() { return Math.random() - 0.5 });

        // METODO PARA CREAR IMAGEN
        function createAnimeImage(index){
            const $img = document.createElement("img")
            $img.src = IMAGE_BASE_URL + PICTURE_LIST[index]
            $img.id = `img_${index}`
            $img.classList.add("anime-images")
            return $img
        }

        for(const index in PICTURE_LIST){

            $content.appendChild(createAnimeImage(index))
            
            const pfrom = (index%3 == 0) ? PROPERTIES.localtion_3.from : (index%2 == 0) ? PROPERTIES.location_2.from : PROPERTIES.location_1.from
            const pto = (index%3 == 0) ? PROPERTIES.localtion_3.to : (index%2 == 0) ? PROPERTIES.location_2.to : PROPERTIES.location_1.to

            T_LINE.from(`#img_${index}`, pfrom);
            T_LINE.to(`#img_${index}`, {...pto, onComplete: hideImage, onCompleteParams: [`img_${index}`]});         
        }
        // AGREGAR BOTONES DE CONTROL
        add_buttons_gsap(T_LINE)
            
    }

    // INICAR PROCESO
    const tl = gsap.timeline({paused: true});
    init_process(tl);

    
})();


