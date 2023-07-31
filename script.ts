
const videoElement = document.getElementById("video") as HTMLVideoElement;
const button = document.getElementById("button") as HTMLButtonElement;
const reset = document.getElementById("reset");


// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() : Promise<any>
{
    try 
    {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // Waits for user to select screen
        videoElement.srcObject = mediaStream; // Sets mediaStream to source object
        videoElement.onloadedmetadata = () => {videoElement.play();}; // Plays video when loaded
    }
    catch 
    {
        // Catch error here
        console.log("whoops, error");
    }
}

button.addEventListener("click", async () => {
    // Disable button
    button.disabled = true; // Button disabled while requesting
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();  // Waits for video element request
    // Reset Button
    button.disabled = false;
} )

reset?.addEventListener("click", async () => {window.location.reload();})



// On load
selectMediaStream();