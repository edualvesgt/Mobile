import { HeaderContainer, HeaderContent, TextHeader } from "./StyleHeader";

export function Header() {
    return (
        // Header Container sera uma View 
        //Header Content sera uma SafeAreaView 
        //Text Header sera um text 

        <HeaderContainer>
            <HeaderContent>
                <TextHeader>
                    Via CEP
                </TextHeader>
            </HeaderContent>
        </HeaderContainer>
    )
}