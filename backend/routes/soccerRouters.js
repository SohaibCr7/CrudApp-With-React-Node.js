import {addNewPlayer,getPlayers, getPlayerByID, updatePlayer ,deletePlayer} from "../controllers/playerControllers";

const routes = (app) => {
    app.route('/player')
    // GET endpoint
    .get(getPlayers)
    
    // POST endpoint
     .post(addNewPlayer);

     app.route('/player/:PlayerId')
    //  GET Specific player
     .get(getPlayerByID)

    //  UPDate Specific player
    app.route('/playerUpdate/:PlayerId')
     .put(updatePlayer)

     //  Delete Specific player
     .delete(deletePlayer);
}

export default routes;