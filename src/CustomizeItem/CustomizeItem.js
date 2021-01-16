
import React from 'react';
import slugify from 'slugify';
import FeatureOption from "../FeatureOption/FeatureOption"


export default function CustomizeItem(props) {
    const {feature,idx}=props
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(option => {
        const itemHash = slugify(JSON.stringify(option));
        return (
            <FeatureOption
                itemHash={itemHash}
                feature={feature}
                option={option}
                {...props}
            />
        );
    });
    return (
        <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{feature}</h3>
            </legend>
            {options}
        </fieldset>
    );
}