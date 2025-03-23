export default function Tab({ button, children, ButtonContainer }) {

    return (
        <>
            <ButtonContainer>
                {button}
            </ButtonContainer>
            {children}
        </>
    )




}