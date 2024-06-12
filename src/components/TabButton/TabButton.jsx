export default function TabButton({children, isSelected, onClick}){   

    return(
        <li>
            <button 
            className={isSelected ? "active" : undefined}
            onClick={onClick}>
                {children}
            </button>
        </li>
    );
}; 