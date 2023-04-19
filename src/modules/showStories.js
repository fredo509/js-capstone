export const showStories = async (temp) => {
  const response = await fetch('https://bobsburgers-api.herokuapp.com/characters/[1,2,3,4,8,10]', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const myStories = await response.json();
  myStories.forEach((episode) => {
    temp.innerHTML += `
     <article class="card">
           <div class="card-stucture">
              <div class="card-picture">
                  <img src=${episode.image} alt="ArticlePicture">
              </div>
              <div class="my-like">
                <div class="card-title">
                <span class="name">${episode.name}</span><br/>
                First Episode :<span>${episode.firstEpisode}</span><br/>
                Voice By : <span>${episode.voicedBy}</span>
                </div>
                <div class="likePlus">
                
                  <button type="button" class="like">-</button>
                  <p> <span id="likecount">1 </span>Likes</p>
                  <div class="btn">
            <button class="btnComment" type="button">Comments</button>
            <button class="btnReservation" type="button">Reservation</button>
          </div>
                </div>
                
              </div>
              
            </div>
          
        </article>
  `;
  });
};

export const like = document.getElementsByClassName('likecount');
export const btncomment = document.getElementsByClassName('btnComment');
export const btnreservation = document.getElementsByClassName('btnReservation');
