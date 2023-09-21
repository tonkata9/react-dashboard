import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../../theme";

function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is an admin dashboard, and why do I need it?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An admin dashboard is a web-based interface designed to help you
            manage and monitor various aspects of your website or application.
            It provides a centralized hub for tasks such as user management,
            content editing, data analysis, and more. You need it to streamline
            your website's operations, make informed decisions, and efficiently
            control your online presence.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I access the admin dashboard of my website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To access your website's admin dashboard, typically, you can log in
            using your admin credentials. You should have received these
            credentials when your website was set up. Once logged in, you can
            usually find a link or button labeled "Admin Dashboard" in your
            website's navigation menu or backend interface.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are the key features of the admin dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The key features of an admin dashboard may vary depending on your
            specific website or application. However, common features include
            user management, content management, data analytics, reporting,
            settings customization, and sometimes integrations with third-party
            tools. The dashboard serves as a control center for these functions,
            making them easily accessible and manageable.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I customize the layout and design of the admin dashboard to
            match my brand?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, many admin dashboards offer customization options to align the
            layout and design with your brand's aesthetics. You can often change
            colors, logos, fonts, and even the overall structure to create a
            consistent look and feel that represents your brand identity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I add or remove users from the admin dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adding or removing users from the admin dashboard is usually
            straightforward. You can access the "User Management" or a similar
            section within the dashboard. To add a user, you'll typically need
            to provide their email address and set their permissions and roles.
            To remove a user, find their profile in the user management section
            and select the option to delete or deactivate their account,
            depending on your system's options. Be cautious when removing users,
            as it can impact their access and privileges.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default FAQ;
