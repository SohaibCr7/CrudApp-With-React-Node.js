import {addNewPlayer,getPlayers, getPlayersWithID, updatePlayer ,deletePlayer} from "../controllers/playerControllers";

const routes = (app) => {
    app.route('/player')
    // GET endpoint
    .get(getPlayers)
    
    // POST endpoint
     .post(addNewPlayer);

     app.route('/player/:PlayerId')
    //  GET Specific player
     .get(getPlayersWithID)

    //  UPDate Specific player
     .put(updatePlayer)

     //  Delete Specific player
     .delete(deletePlayer);
}

export default routes;