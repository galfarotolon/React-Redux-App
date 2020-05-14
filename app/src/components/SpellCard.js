import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSpell } from "../store/actions/index";

const SpellCard = props => {

    useEffect(() => {
        props.fetchSpell();
    }, []);



    //const { spell, fetchSpell} = props;

    // useEffect(() => {
    //   if (spell) {
    //     fetchSpell(spell.name[0]);
    //   }
    // }, [spell, fetchSpell]);


    console.log('spellCard', props)



    return (
        <main>


            {props.isFetching && <h5>Fetching data...</h5>}
            {/* list of spells */}
            {props.spell && (
                <div>

                    <h3>{props.spell}</h3>



                    {
                        // props.spell.map(item => {
                        //     return <h3>{item.spell}</h3>
                        // })


                    }


                </div>
            )}
        </main>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        isFetching: state.isFetching,
        spell: state.spell,
        desc: state.desc,
        error: null
    };
};

export default connect(
    mapStateToProps,
    { fetchSpell }
)(SpellCard);