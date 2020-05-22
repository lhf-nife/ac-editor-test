import React from 'react';
import styles from './index.less';

import { AcEditorSany } from 'ac-editor-sany';
import 'ac-editor-sany/dist/index.css';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>

      <AcEditorSany
        // 组件id
        editorId="acEditorSanyId"
        // 设置ref属性
        onRef={ref => {
          console.log(ref, 'ref--------');
          // child = ref;
        }}
        fixedDate={[]}
      />
    </div>
  );
};
