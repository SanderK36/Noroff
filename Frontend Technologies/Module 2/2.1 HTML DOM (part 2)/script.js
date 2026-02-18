const images = document.getElementsByTagName("img");
document.getElementById("demo").innerHTML = "Number of images: " + images.length;

function showDetails() {
    const firstImage = images[0];

    if(firstImage) {
        const width = firstImage.width;
        const height = firstImage.height;
        const src = firstImage.src;

        alert("First image details:\nWidth: " + width + "\nHeight: " + height + "\nSource: " + src);
    } else {
        alert("No images found.");
    }
}