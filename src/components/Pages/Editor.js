import { useState } from 'react';

const SidebarItems = [
    {
        id: 0,
        name: "Data",
        icon: "dataIcon",
        linkPath: '/editor/data',
        status: "active",
    },
    {
        id: 1,
        name: "Label",
        icon: "tagIcon",
        linkPath: '/editor/label',
        status: "enabled",
    },
    {
        id: 2,
        name: "Train",
        icon: "dashIcon",
        linkPath: '/editor/train',
        status: "enabled",
    },
    {
        id: 3,
        name: "Results",
        icon: "resultsIcon",
        linkPath: '/editor/results',
        status: "enabled",
    },
    {
        id: 4,
        name: "Ship",
        icon: "shipIcon",
        linkPath: '/editor/ship',
        status: "enabled",
    },
    {
        id: 5,
        name: "Monitor",
        icon: "monitorIcon",
        linkPath: '/editor/monitor',
        status: "disabled",
    },
    {
        id: 6,
        name: "Show demo",
        icon: "playIcon",
        linkPath: '/editor/demo',
        status: "disabled",
    },
];

/**
 * - EditorNav
 * - EditorSidebar
 *  - Sidebar Item
 * - VersionResultsDashboard
 * - SidebarAvatar
 * - UploadPage
 *    - UploadHeading
 *    - UploadDropzone
 *    - UploadButton 
 *    - FindImagesElsewhereButton
 * - UploadGallery
 *      - ImageGallery
 *      - ImageGalleryItem
 *      - ImageGalleryHeading
 *          - BreadCrumbs
 *          - SearchBar
 *          - UploadDataButton
 *  - UploadedDataset
 *      - UploadedDatasetHeading
 *          - UploadMoreData Button
 *          - SettingsDropdown
 * - 
* 
 * 
 *  
 */
export default function Editor(){
    return(
        <></>
    );
}
export function EditorNav(){
    return(
        <div className='EditorNav'>
            {/* BackToProjects */}
            {/* TensorMaker Logo */}
            {/* Avatar */}
        </div>
    );

}