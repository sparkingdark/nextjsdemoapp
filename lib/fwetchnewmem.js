const memeurl = "https://api.imgflip.com/get_memes"
export const Getmemes = async (req, res) => {
    const response = await fetch(memeurl)
    return response.json().then(data => {
        return data
    })
}

