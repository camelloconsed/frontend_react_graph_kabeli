import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { client } from '../App';
import { gql } from '@apollo/client';
import { TableData} from './TableData'
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const getData = async (indicator: string) => {
    indicator = indicator.toLocaleLowerCase()
    console.log(indicator)
    switch (indicator) {
      case "libra cobre":
        indicator = "libra_cobre"
        break;
        case "dolar intercambio":
          indicator = "dolar_intercambio"
          break;
          case "tasa desempleo":
        indicator = "tasa_desempleo"
        break;
      default:
        break;
    }
    client
    .query({
      query: gql`
        query getData {
          getData {
      
      ${indicator} {
        codigo
        fecha
        nombre
        unidad_medida
        valor
      }          
      }}`,
    })
    .then((result) => {
      switch (indicator) {
        case "uf":
          setData({
            codigo: result.data.getData.uf.codigo,
            fecha: result.data.getData.uf.fecha,
            nombre: result.data.getData.uf.nombre,
            unidadMedida: result.data.getData.uf.unidad_medida,
            valor: result.data.getData.uf.valor
          })
          break;
          case "ivp":
            setData({
              codigo: result.data.getData.ivp.codigo,
              fecha: result.data.getData.ivp.fecha,
              nombre: result.data.getData.ivp.nombre,
              unidadMedida: result.data.getData.ivp.unidad_medida,
              valor: result.data.getData.ivp.valor
            })
            break;
            case "ipc":
            setData({
              codigo: result.data.getData.ipc.codigo,
              fecha: result.data.getData.ipc.fecha,
              nombre: result.data.getData.ipc.nombre,
              unidadMedida: result.data.getData.ipc.unidad_medida,
              valor: result.data.getData.ipc.valor
            })
            break;

            case "utm":
          setData({
            codigo: result.data.getData.utm.codigo,
            fecha: result.data.getData.utm.fecha,
            nombre: result.data.getData.utm.nombre,
            unidadMedida: result.data.getData.utm.unidad_medida,
            valor: result.data.getData.utm.valor
          })
          break;
          case "imacec":
            setData({
              codigo: result.data.getData.imacec.codigo,
              fecha: result.data.getData.imacec.fecha,
              nombre: result.data.getData.imacec.nombre,
              unidadMedida: result.data.getData.imacec.unidad_medida,
              valor: result.data.getData.imacec.valor
            })
            break;
            case "tpm":
            setData({
              codigo: result.data.getData.tpm.codigo,
              fecha: result.data.getData.tpm.fecha,
              nombre: result.data.getData.tpm.nombre,
              unidadMedida: result.data.getData.tpm.unidad_medida,
              valor: result.data.getData.tpm.valor
            })
            break;


            case "libra_cobre":
            setData({
              codigo: result.data.getData.libra_cobre.codigo,
              fecha: result.data.getData.libra_cobre.fecha,
              nombre: result.data.getData.libra_cobre.nombre,
              unidadMedida: result.data.getData.libra_cobre.unidad_medida,
              valor: result.data.getData.libra_cobre.valor
            })
            break;
            case "tasa_desempleo":
            setData({
              codigo: result.data.getData.tasa_desempleo.codigo,
              fecha: result.data.getData.tasa_desempleo.fecha,
              nombre: result.data.getData.tasa_desempleo.nombre,
              unidadMedida: result.data.getData.tasa_desempleo.unidad_medida,
              valor: result.data.getData.tasa_desempleo.valor
            })
            break;

            case "dolar":
          setData({
            codigo: result.data.getData.dolar.codigo,
            fecha: result.data.getData.dolar.fecha,
            nombre: result.data.getData.dolar.nombre,
            unidadMedida: result.data.getData.dolar.unidad_medida,
            valor: result.data.getData.dolar.valor
          })
          break;
          case "dolar_intercambio":
            setData({
              codigo: result.data.getData.dolar_intercambio.codigo,
              fecha: result.data.getData.dolar_intercambio.fecha,
              nombre: result.data.getData.dolar_intercambio.nombre,
              unidadMedida: result.data.getData.dolar_intercambio.unidad_medida,
              valor: result.data.getData.dolar_intercambio.valor
            })
            break;
            case "euro":
            setData({
              codigo: result.data.getData.euro.codigo,
              fecha: result.data.getData.euro.fecha,
              nombre: result.data.getData.euro.nombre,
              unidadMedida: result.data.getData.euro.unidad_medida,
              valor: result.data.getData.euro.valor
            })
            break;
            case "bitcoin":
            setData({
              codigo: result.data.getData.bitcoin.codigo,
              fecha: result.data.getData.bitcoin.fecha,
              nombre: result.data.getData.bitcoin.nombre,
              unidadMedida: result.data.getData.bitcoin.unidad_medida,
              valor: result.data.getData.bitcoin.valor
            })
            break;
        default:
          break;
      }
      
      }
    );    
  }
  const [data, setData] = React.useState({
    codigo: "",
    fecha: "",
    nombre: "",
    unidadMedida: "",
    valor: 0
});
  console.log("data: ", data)
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Indicadores Económicos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['UF', 'IVP', 'IPC', 'UTM', 'IMACEC', 'TPM', 'LIBRA COBRE', 'TASA DESEMPLEO'].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton key={index} onClick={() => 
                getData(text)
              }>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['DOLAR', 'DOLAR INTERCAMBIO', 'EURO', 'BITCOIN'].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => 
                getData(text)
              }>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
            <TableData data={data} />
        </Typography>
      </Main>
    </Box>
  );
}
