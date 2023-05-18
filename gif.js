console.log("lets get the part started!")
const $gifArea = $("body");
const $searchInput = $(".search");

/* use ajax result to add a gif */

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let random = Math.floor(Math.random() * numResults)
    let $newCol = $("<div>");
    let $newGif = $("<img>", {
      src: res.data[random].images.original.url,
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

/* handle form submission: clear search box & make ajax call */

// creating async function to us await when getting axios for the api
$("form").on("submit", async function(evt) {
  evt.preventDefault();
  let searchTerm = $searchInput.val();
  $searchInput.val("");
  const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}`)
  addGif(response.data);
  $("button.remove").on('click', function(e) {
    $("div img").remove()
})
});
