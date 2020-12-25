import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./structure.css";

import StructureItem from '../structure-item/structure-item';

const StructureComponent = () => {
  const structures = [
    {
      title: "struktur2",
      purple: 2222,
      blue: 2222,
      green: 2222,
      orange: 2222,
      items: [
        {
          title: "hüquq",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
        {
          title: "marketinq",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
        {
          title: "investisiya",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
      ],
    },
    {
      title: "struktur3",
      purple: 2222,
      blue: 2222,
      green: 2222,
      orange: 2222,
      items: [
        {
          title: "hüquq",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
        {
          title: "marketinq",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
        {
          title: "investisiya",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
      ],
    },
    {
      title: "struktur4",
      purple: 2222,
      blue: 2222,
      green: 2222,
      orange: 2222,
      items: [
        {
          title: "hüquq",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
        {
          title: "marketinq",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
        {
          title: "investisiya",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
      ],
    },
    {
      title: "struktur5",
      purple: 2222,
      blue: 2222,
      green: 2222,
      orange: 2222,
      items: [
        {
          title: "hüquq",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
        {
          title: "marketinq",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
        {
          title: "investisiya",
          green: 2222,
          orange: 2222,
          subitems: ["strateji", "strateji", "strateji"],
        },
      ],
    },
  ];
  return (
    <div className="accordion-card">
      {structures.map((item) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>{item.title}</p>
            <div className="counts">
              <p className="purple count">{item.purple}</p>
              <p className="blue count">{item.blue}</p>
              <p className="green count">{item.green}</p>
              <p className="orange count">{item.orange}</p>
            </div>
          </AccordionSummary>
          <AccordionDetails className="vertical-list">
            {item.items.map((childItem) => (
                <StructureItem items={childItem}/>
                // 
            //   <Accordion>
            //     <AccordionSummary>
            //       <p>• {childItem.title}</p>
            //       <div className="counts">
            //         <p className="green count">{childItem.green}</p>
            //         <p className="orange count">{childItem.orange}</p>
            //       </div>
            //     </AccordionSummary>
            //     <AccordionDetails>
            //         <div className="vertical-list">
            //             {childItem.subitems.map((lastItem) => (
            //                 <p>- {lastItem}</p>
            //             ))}
            //         </div>
            //     </AccordionDetails>
            //   </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default StructureComponent;
