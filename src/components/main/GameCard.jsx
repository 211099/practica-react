    function GameCard(params) {
        return(
            <div className="game-card">
                
                <div className="container-game-card-img">
                    <img src="https://images6.alphacoders.com/120/1203057.jpg" alt="" className="game-card-img"/>
                </div>

                <div className="game-card-footer">
                    <div className="game-card-title">
                        <p>starfield</p>
                    </div>
                    <div className="game-card-price">
                        <button className="price-button">
                            $45
                        </button>
                    </div>
                </div>

            </div>
        )
    }

    export default GameCard