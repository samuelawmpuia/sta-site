interface folderProps {
    id: number;
    onTabClick: (id: number) => void;
    tabClicked: boolean;
}


function Folder({id, onTabClick, tabClicked}: folderProps) {

    return (
        <div className="folder-container">
            <button className={`folder-tab ${tabClicked ? 'clicked' : ''}`} onClick={() => onTabClick(id)}>Folder Name</button>
            <div className={`folder ${tabClicked ? 'clicked' : ''}`} style={{ backgroundImage: `url(/folder${id}.png)` }}>
                <div className="folder-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique, dolor id consectetur lacinia, mauris libero rhoncus nisi, eget lacinia nunc lectus sed metus. Vestibulum ultricies nunc vitae ultricies varius. Praesent at nulla non nisi placerat pretium non ut leo. Ut eu ante et magna volutpat ultrices. Maecenas aliquet scelerisque risus, eu luctus velit volutpat a. Vestibulum iaculis nunc quis enim congue mattis. Phasellus iaculis, massa non tempus placerat, ligula justo iaculis neque, sodales pretium elit turpis feugiat felis. Suspendisse potenti. Quisque nec enim semper, sollicitudin odio tempor, efficitur sem. Fusce vitae ipsum turpis. Proin vulputate vitae orci non ultricies. Phasellus nec arcu dui. Ut accumsan, odio ac ornare sagittis, nibh eros placerat augue, id placerat magna diam et massa.</p>
                    <p>Praesent euismod, augue sed facilisis tincidunt, urna lorem consequat nunc, sed consequat mauris arcu sit amet neque. Vivamus at dolor et sapien gravida volutpat.</p>
                    <p>Nullam non justo nec nisl varius faucibus. Suspendisse potenti. In hac habitasse platea dictumst. Maecenas hendrerit, nisl et vehicula aliquet, sapien justo aliquet nisl, vitae lacinia risus orci sed lorem.</p>
                    <p>Sed sit amet magna sit amet lorem efficitur cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean nec mi et arcu fermentum volutpat.</p>
                    <p>Fusce a eros quis nunc vulputate convallis. Donec venenatis, massa non bibendum luctus, erat arcu cursus nibh, sit amet dictum tortor lorem at justo. Integer quis arcu et urna gravida tincidunt.</p>
                </div>
            </div>
        </div>
    )
}

export default Folder;