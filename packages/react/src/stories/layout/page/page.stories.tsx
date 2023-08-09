import {
  BroadcastOutline,
  GlobeOutline,
  HomeOutline,
  MenuOutline,
  PriceTagOutline,
  SlidersOutline,
  TruckOutline,
} from "@envio-ui/icons";
import React from "react";
import { Button, Navbar, Page } from "../../../components";

export default {
  title: "Components/Layout/Page",
};

const menu = [
  {
    label: "Home",
    icon: HomeOutline,
    url: "/",
    active: "",
    isDropdown: true,
    child: [
      {
        icon: TruckOutline,
        label: "Envio digital logistik & supply chain enabler",
        desciption:
          "Platform logistik berbasis cloud yang dapat menampilkan proses rantai pasokan secara komprehensif dan real-time",
        url: "/",
        active: "",
      },
      {
        icon: GlobeOutline,
        label: "Supply chain management solution",
        desciption:
          "Membantu dalam mengelola rantai pasokan dari hulu ke hilir dengan tim expert di bidangnya",
        url: "/",
        active: "",
      },
      {
        icon: BroadcastOutline,
        label: "Layanan transportasi",
        desciption:
          "Kelola pemindahan produk dalam jumlah besar dari gudang ke gudang atau ke pelanggan dengan mudah, aman dan fleksibel.",
        url: "/",
        active: "",
      },
      {
        icon: SlidersOutline,
        label: "Layanan pergudangan",
        desciption:
          "Kelola stok, pengemasan dan pengiriman barang dengan mudah, aman dan fleksibel sesuai dengan kebutuhan perusahaan.",
        url: "/",
        active: "",
      },
    ],
  },
  {
    label: "Product",
    icon: PriceTagOutline,
    url: "/product",
    active: "product",
    disabled: true,
  },
  {
    label: "Services",
    url: "/",
    active: "service",
  },
  {
    label: "About Us",
    url: "/about",
    active: "about",
  },
];

export const Example = () => {
  return (
    <Page border={"1px solid #000"}>
      <Page.Header sticky className="">
        <Page.Container
          wrapper="md"
          alignItems="center"
          display={"flex"}
          justifyContent={"stretch"}
          type="navbar"
        >
          <Navbar
            theme="dark"
            brand="https://envio.co.id/static/media/logo.64687ddcab57889e138f.png"
            menu={menu}
          />
          <div className="navbar-toggler">
            <Button
              icon={MenuOutline}
              size="sm"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                height: 20,
                width: 20,
              }}
            />
          </div>
        </Page.Container>
      </Page.Header>
      <div style={{ height: 3000 }} />
    </Page>
  );
};