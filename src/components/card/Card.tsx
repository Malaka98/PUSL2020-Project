import {Box, Heading} from "@chakra-ui/react";
import {FiEdit3} from 'react-icons/fi';

interface IProps {
    title?: string | number,
    children: JSX.Element[] | JSX.Element,
    border?: boolean,
    padding?: boolean
    heading?: string | number,
    bottomSpace?: boolean,
    topSpace?: boolean,
    shadow?: boolean,
    bg?: string,
    editable?: any
}

const Card = (props: IProps) => {
    const {
        border,
        heading,
        title,
        padding,
        bottomSpace,
        topSpace,
        shadow = false,
        bg = "white",
        editable
    } = props;

    return (
        <Box
            mt={topSpace ? 3 : 0}
        >
            {heading ? <Heading mb={2} size={"sm"}>{heading}</Heading> : null}
            <Box bg={bg}
                 shadow={shadow ? "md" : " "}
                 border={border ? "1px" : "0px"}
                 p={padding ? 2 : 0}
                 borderRadius={3}
                 pos={"relative"}
                 borderColor={"blackAlpha.200"}
                 mb={bottomSpace ? 4 : 0}>
                {title ? <Heading textTransform={"uppercase"} fontWeight={"semibold"} color={"blackAlpha.800"}
                                  size={"sm"}>{props.title}</Heading> : null}
                {props.children}

                {editable ? <Box pos={"absolute"} top={2} right={2}>
                    <FiEdit3/>
                </Box> : null}


            </Box>
        </Box>
    )
}
export default Card;