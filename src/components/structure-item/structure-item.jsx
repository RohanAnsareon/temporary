import React from 'react';
import './structure-item.css'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
  } from "@material-ui/core";

const StructureItemComponent = ({items}) => {
    return (
        <Accordion>
                <AccordionSummary>
                  <p>• {items.title}</p>
                  <div className="counts">
                    <p className="green count">{items.green}</p>
                    <p className="orange count">{items.orange}</p>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="vertical-list">
                        {items.subitems.map((lastItem) => (
                            <p>- {lastItem}</p>
                        ))}
                    </div>
                </AccordionDetails>
              </Accordion>
    );
}

export default StructureItemComponent;