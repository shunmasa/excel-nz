var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { DropzoneArea } from 'material-ui-dropzone';
const DropZone = (_a) => {
    var { field: { name }, form: { setFieldValue } } = _a, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    props = __rest(_a, ["field", "form"]);
    return (<DropzoneArea acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']} dropzoneText={"イメージをここに貼り付けて"} onDrop={([file]) => {
        setFieldValue(name, file);
    }} {...props}>
     
    </DropzoneArea>);
};
export default DropZone;
