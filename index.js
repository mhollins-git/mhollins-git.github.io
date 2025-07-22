

const wolfImages = [
    "https://media.istockphoto.com/id/91895082/photo/young-male-wolf.jpg?s=612x612&w=0&k=20&c=pbl9NoJoMnW1d8hTLYSYo84uibFQbtXd48h1xhxwuiQ=",
    "https://www.reddit.com/media?url=https%3A%2F%2Fexternal-preview.redd.it%2FFCv9LSW37bTUDDM-WykVNReJNax_JT43sWgpGC58GL4.png%3Fformat%3Dpjpg%26auto%3Dwebp%26s%3Dc7fa81004e8b3e2751e42a375074aac7c6aab42d",
    "https://i.ytimg.com/vi/knSOtiotbB0/maxresdefault.jpg"
]

function getRandomWolf()
{
    return wolfImages.at( Math.random() * wolfImages.length );
}

document.addEventListener('DOMContentLoaded', function() {
    var meta = document.createElement( 'meta' );
    meta.setAttribute('property', 'og:image');
    meta.setAttribute('content', getRandomWolf());
    document.head.appendChild( meta );
});