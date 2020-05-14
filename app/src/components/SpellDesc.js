import React, { useEffect } from "react";
import { connect } from "react-redux";

import { indexCatcher } from "../store/actions/index";

const SpellDesc = props => {

    useEffect(() => {
        props.indexCatcher();
    }, []);



    //const { spell, fetchSpell} = props;

    // useEffect(() => {
    //   if (spell) {
    //     fetchSpell(spell.name[0]);
    //   }
    // }, [spell, fetchSpell]);


    console.log('spellDesc', props)

    return (
        <main>
            <h4>Description</h4>
            {props.isFetching && <h5>Fetching data...</h5>}
            {/* list of spells */}
            {props.desc && (
                <div>

                    {
                        // props.spell.map(item => {
                        //     return <h3>{item.spell}</h3>
                        // })


                    }

                    <div className='description'>{props.desc}</div>

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
    { indexCatcher }
)(SpellDesc);