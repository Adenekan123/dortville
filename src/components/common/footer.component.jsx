import { Paper, Stack, Box, IconButton, Typography } from "@mui/material";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        py: 5,
        px: { xs: 0, md: 12 },
        backgroundColor: "#fff",
      }}>
      {/* <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center">
        <Box>
          <Button color="tertiary" sx={{ px: 2 }}>
            Home
          </Button>
        </Box>
        <Box>
          <Button color="tertiary" sx={{ px: 2 }}>
            About
          </Button>
        </Box>
        <Box>
          <Button color="tertiary" sx={{ px: 2 }}>
            Service
          </Button>
        </Box>
        <Box>
          <Button color="tertiary" sx={{ px: 2 }}>
            Contact
          </Button>
        </Box>
        <Box>
          <Button color="tertiary" sx={{ px: 2 }}>
            Careers
          </Button>
        </Box>
      </Stack> */}
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3 }}>
        <Box>
          <IconButton color="secondary" sx={{ px: 2 }}>
            <Facebook />
          </IconButton>
        </Box>
        <Box>
          <IconButton color="secondary" sx={{ px: 2 }}>
            <Twitter />
          </IconButton>
        </Box>
        <Box>
          <IconButton color="secondary" sx={{ px: 2 }}>
            <LinkedIn />
          </IconButton>
        </Box>
      </Stack>
      <Typography sx={{ textAlign: "center", mt: 2 }}>
        &copy; 2023 Dorfville Farms | All Rights Reserved
      </Typography>
    </Paper>
  );
};

export default Footer;
