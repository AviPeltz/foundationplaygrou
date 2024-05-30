import HeadingLevel from "../HeadingLevel";
import SectionLevel from "../SectionLevel";
import MyNavBar from "../MyNavBar";

export default function LevelPage() {
    return(
        <>
        <MyNavBar />
        <SectionLevel>
            <HeadingLevel>Title</HeadingLevel>
            <SectionLevel>
                <HeadingLevel>Heading</HeadingLevel>
                <HeadingLevel>Heading</HeadingLevel>
                <HeadingLevel>Heading</HeadingLevel>
                <SectionLevel>
                    <HeadingLevel>Sub-Heading</HeadingLevel>
                    <HeadingLevel>Sub-Heading</HeadingLevel>
                    <HeadingLevel>Sub-Heading</HeadingLevel>
                    <SectionLevel>
                        <HeadingLevel>Sub-Sub-Heading</HeadingLevel>
                        <HeadingLevel>Sub-Sub-Heading</HeadingLevel>
                        <HeadingLevel>Sub-Sub-Heading</HeadingLevel>
                        <SectionLevel>
                            <HeadingLevel>Sub-Sub-Sub-Heading</HeadingLevel>
                            <HeadingLevel>Sub-Sub-Sub-Heading</HeadingLevel>
                            <HeadingLevel>Sub-Sub-Sub-Heading</HeadingLevel>
                            <SectionLevel>
                                <HeadingLevel>Sub-Sub-Sub-Sub-Heading</HeadingLevel>
                                <HeadingLevel>Sub-Sub-Sub-Sub-Heading</HeadingLevel>
                                <HeadingLevel>Sub-Sub-Sub-Sub-Heading</HeadingLevel>    
                            </SectionLevel>
                        </SectionLevel>
                    </SectionLevel>
                </SectionLevel>
            </SectionLevel>
        </SectionLevel>
        </>
    );
}