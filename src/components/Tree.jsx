import React, { useState } from "react";
import "./Tree.css";

function Tree({ treeData }) {
  return (
    <ul style={{ paddingLeft: "0px" }}>
      {treeData.map((node) => (
        <TreeNode node={node} key={node.key} />
      ))}
    </ul>
  );
}

function TreeNode({ node }) {
  const { children, label } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    children && setShowChildren(!showChildren);
  };
  return (
    <>
      <div onClick={handleClick} style={{ marginBottom: "2px" }}>
        {children &&
          children.length > 0 &&
          (showChildren ? (
            <span className="arrow right"> </span>
          ) : (
            <span className="arrow down"> </span>
          ))}
        <span className="tree-item">{label}</span>
      </div>
      <ul style={{ paddingLeft: "20px" }}>
        {showChildren && <Tree treeData={children} />}
      </ul>
    </>
  );
}

export default Tree;
