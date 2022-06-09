(function() {
    'use strict';

    var mimeTypes = [
        {
            "name": "3D Crossword Plugin",
            "type": "application/vnd.hzn-3d-crossword",
            "extension": ".x3d"
        },
        {
            "name": "3GP",
            "type": "video/3gpp",
            "extension": ".3gp"
        },
        {
            "name": "3GP2",
            "type": "video/3gpp2",
            "extension": ".3g2"
        },
        {
            "name": "3GPP MSEQ File",
            "type": "application/vnd.mseq",
            "extension": ".mseq"
        },
        {
            "name": "3M Post It Notes",
            "type": "application/vnd.3m.post-it-notes",
            "extension": ".pwn"
        },
        {
            "name": "3rd Generation Partnership Project - Pic Large",
            "type": "application/vnd.3gpp.pic-bw-large",
            "extension": ".plb"
        },
        {
            "name": "3rd Generation Partnership Project - Pic Small",
            "type": "application/vnd.3gpp.pic-bw-small",
            "extension": ".psb"
        },
        {
            "name": "3rd Generation Partnership Project - Pic Var",
            "type": "application/vnd.3gpp.pic-bw-var",
            "extension": ".pvb"
        },
        {
            "name": "3rd Generation Partnership Project - Transaction Capabilities Application Part",
            "type": "application/vnd.3gpp2.tcap",
            "extension": ".tcap"
        },
        {
            "name": "7-Zip",
            "type": "application/x-7z-compressed",
            "extension": ".7z"
        },
        {
            "name": "AbiWord",
            "type": "application/x-abiword",
            "extension": ".abw"
        },
        {
            "name": "Ace Archive",
            "type": "application/x-ace-compressed",
            "extension": ".ace"
        },
        {
            "name": "Active Content Compression",
            "type": "application/vnd.americandynamics.acc",
            "extension": ".acc"
        },
        {
            "name": "ACU Cobol",
            "type": "application/vnd.acucobol",
            "extension": ".acu"
        },
        {
            "name": "ACU Cobol",
            "type": "application/vnd.acucorp",
            "extension": ".atc"
        },
        {
            "name": "Adaptive differential pulse-code modulation",
            "type": "audio/adpcm",
            "extension": ".adp"
        },
        {
            "name": "Adobe (Macropedia) Authorware - Binary File",
            "type": "application/x-authorware-bin",
            "extension": ".aab"
        },
        {
            "name": "Adobe (Macropedia) Authorware - Map",
            "type": "application/x-authorware-map",
            "extension": ".aam"
        },
        {
            "name": "Adobe (Macropedia) Authorware - Segment File",
            "type": "application/x-authorware-seg",
            "extension": ".aas"
        },
        {
            "name": "Adobe AIR Application",
            "type": "application/vnd.adobe.air-application-installer-package+zip",
            "extension": ".air"
        },
        {
            "name": "Adobe Flash",
            "type": "application/x-shockwave-flash",
            "extension": ".swf"
        },
        {
            "name": "Adobe Flex Project",
            "type": "application/vnd.adobe.fxp",
            "extension": ".fxp"
        },
        {
            "name": "Adobe Portable Document Format",
            "type": "application/pdf",
            "extension": ".pdf"
        },
        {
            "name": "Adobe PostScript Printer Description File Format",
            "type": "application/vnd.cups-ppd",
            "extension": ".ppd"
        },
        {
            "name": "Adobe Shockwave Player",
            "type": "application/x-director",
            "extension": ".dir"
        },
        {
            "name": "Adobe XML Data Package",
            "type": "application/vnd.adobe.xdp+xml",
            "extension": ".xdp"
        },
        {
            "name": "Adobe XML Forms Data Format",
            "type": "application/vnd.adobe.xfdf",
            "extension": ".xfdf"
        },
        {
            "name": "Advanced Audio Coding (AAC)",
            "type": "audio/x-aac",
            "extension": ".aac"
        },
        {
            "name": "Ahead AIR Application",
            "type": "application/vnd.ahead.space",
            "extension": ".ahead"
        },
        {
            "name": "AirZip FileSECURE",
            "type": "application/vnd.airzip.filesecure.azf",
            "extension": ".azf"
        },
        {
            "name": "AirZip FileSECURE",
            "type": "application/vnd.airzip.filesecure.azs",
            "extension": ".azs"
        },
        {
            "name": "Amazon Kindle eBook format",
            "type": "application/vnd.amazon.ebook",
            "extension": ".azw"
        },
        {
            "name": "AmigaDE",
            "type": "application/vnd.amiga.ami",
            "extension": ".ami"
        },
        {
            "name": "Andrew Toolkit",
            "type": "application/andrew-inset",
            "extension": "N/A"
        },
        {
            "name": "Android Package Archive",
            "type": "application/vnd.android.package-archive",
            "extension": ".apk"
        },
        {
            "name": "ANSER-WEB Terminal Client - Certificate Issue",
            "type": "application/vnd.anser-web-certificate-issue-initiation",
            "extension": ".cii"
        },
        {
            "name": "ANSER-WEB Terminal Client - Web Funds Transfer",
            "type": "application/vnd.anser-web-funds-transfer-initiation",
            "extension": ".fti"
        },
        {
            "name": "Antix Game Player",
            "type": "application/vnd.antix.game-component",
            "extension": ".atx"
        },
        {
            "name": "Apple Disk Image",
            "type": "application/x-apple-diskimage",
            "extension": ".dmg"
        },
        {
            "name": "Apple Installer Package",
            "type": "application/vnd.apple.installer+xml",
            "extension": ".mpkg"
        },
        {
            "name": "Applixware",
            "type": "application/applixware",
            "extension": ".aw"
        },
        {
            "name": "Archipelago Lesson Player",
            "type": "application/vnd.hhe.lesson-player",
            "extension": ".les"
        },
        {
            "name": "Archive document - Multiple Fils Embedded",
            "type": "application/x-freearc",
            "extension": ".arc"
        },
        {
            "name": "Arista Networks Software Image",
            "type": "application/vnd.aristanetworks.swi",
            "extension": ".swi"
        },
        {
            "name": "Assembler Source File",
            "type": "text/x-asm",
            "extension": ".s"
        },
        {
            "name": "Atom Publishing Protocol",
            "type": "application/atomcat+xml",
            "extension": ".atomcat"
        },
        {
            "name": "Atom Publishing Protocol Service Document",
            "type": "application/atomsvc+xml",
            "extension": ".atomsvc"
        },
        {
            "name": "Atom Syndication Format",
            "type": "application/atom+xml",
            "extension": ".atom"
        },
        {
            "name": "Attribute Certificate",
            "type": "application/pkix-attr-cert",
            "extension": ".ac"
        },
        {
            "name": "Audio Interchange File Format",
            "type": "audio/x-aiff",
            "extension": ".aif"
        },
        {
            "name": "Audio Video Interleave (AVI)",
            "type": "video/x-msvideo",
            "extension": ".avi"
        },
        {
            "name": "Audiograph",
            "type": "application/vnd.audiograph",
            "extension": ".aep"
        },
        {
            "name": "AutoCAD DXF",
            "type": "image/vnd.dxf",
            "extension": ".dxf"
        },
        {
            "name": "Autodesk Design Web Format (DWF)",
            "type": "model/vnd.dwf",
            "extension": ".dwf"
        },
        {
            "name": "AV1 Image File",
            "type": "image/avif",
            "extension": ".avif"
        },
        {
            "name": "BAS Partitur Format",
            "type": "text/plain-bas",
            "extension": ".par"
        },
        {
            "name": "Binary CPIO Archive",
            "type": "application/x-bcpio",
            "extension": ".bcpio"
        },
        {
            "name": "Binary Data",
            "type": "application/octet-stream",
            "extension": ".bin"
        },
        {
            "name": "Bitmap Image File",
            "type": "image/bmp",
            "extension": ".bmp"
        },
        {
            "name": "BitTorrent",
            "type": "application/x-bittorrent",
            "extension": ".torrent"
        },
        {
            "name": "Blackberry COD File",
            "type": "application/vnd.rim.cod",
            "extension": ".cod"
        },
        {
            "name": "Blueice Research Multipass",
            "type": "application/vnd.blueice.multipass",
            "extension": ".mpm"
        },
        {
            "name": "BMI Drawing Data Interchange",
            "type": "application/vnd.bmi",
            "extension": ".bmi"
        },
        {
            "name": "Bourne Shell Script",
            "type": "application/x-sh",
            "extension": ".sh"
        },
        {
            "name": "BTIF",
            "type": "image/prs.btif",
            "extension": ".btif"
        },
        {
            "name": "BusinessObjects",
            "type": "application/vnd.businessobjects",
            "extension": ".rep"
        },
        {
            "name": "Bzip Archive",
            "type": "application/x-bzip",
            "extension": ".bz"
        },
        {
            "name": "Bzip2 Archive",
            "type": "application/x-bzip2",
            "extension": ".bz2"
        },
        {
            "name": "C Shell Script",
            "type": "application/x-csh",
            "extension": ".csh"
        },
        {
            "name": "C Source File",
            "type": "text/x-c",
            "extension": ".c"
        },
        {
            "name": "CambridgeSoft Chem Draw",
            "type": "application/vnd.chemdraw+xml",
            "extension": ".cdxml"
        },
        {
            "name": "Cascading Style Sheets (CSS)",
            "type": "text/css",
            "extension": ".css"
        },
        {
            "name": "CD Audio",
            "type": "application/x-cdf",
            "extension": ".cda"
        },
        {
            "name": "ChemDraw eXchange file",
            "type": "chemical/x-cdx",
            "extension": ".cdx"
        },
        {
            "name": "Chemical Markup Language",
            "type": "chemical/x-cml",
            "extension": ".cml"
        },
        {
            "name": "Chemical Style Markup Language",
            "type": "chemical/x-csml",
            "extension": ".csml"
        },
        {
            "name": "CIM Database",
            "type": "application/vnd.contact.cmsg",
            "extension": ".cdbcmsg"
        },
        {
            "name": "Claymore Data Files",
            "type": "application/vnd.claymore",
            "extension": ".cla"
        },
        {
            "name": "Clonk Game",
            "type": "application/vnd.clonk.c4group",
            "extension": ".c4g"
        },
        {
            "name": "Close Captioning - Subtitle",
            "type": "image/vnd.dvb.subtitle",
            "extension": ".sub"
        },
        {
            "name": "Cloud Data Management Interface (CDMI) - Capability",
            "type": "application/cdmi-capability",
            "extension": ".cdmia"
        },
        {
            "name": "Cloud Data Management Interface (CDMI) - Contaimer",
            "type": "application/cdmi-container",
            "extension": ".cdmic"
        },
        {
            "name": "Cloud Data Management Interface (CDMI) - Domain",
            "type": "application/cdmi-domain",
            "extension": ".cdmid"
        },
        {
            "name": "Cloud Data Management Interface (CDMI) - Object",
            "type": "application/cdmi-object",
            "extension": ".cdmio"
        },
        {
            "name": "Cloud Data Management Interface (CDMI) - Queue",
            "type": "application/cdmi-queue",
            "extension": ".cdmiq"
        },
        {
            "name": "ClueTrust CartoMobile - Config",
            "type": "application/vnd.cluetrust.cartomobile-config",
            "extension": ".c11amc"
        },
        {
            "name": "ClueTrust CartoMobile - Config Package",
            "type": "application/vnd.cluetrust.cartomobile-config-pkg",
            "extension": ".c11amz"
        },
        {
            "name": "CMU Image",
            "type": "image/x-cmu-raster",
            "extension": ".ras"
        },
        {
            "name": "COLLADA",
            "type": "model/vnd.collada+xml",
            "extension": ".dae"
        },
        {
            "name": "Comma-Seperated Values",
            "type": "text/csv",
            "extension": ".csv"
        },
        {
            "name": "Compact Pro",
            "type": "application/mac-compactpro",
            "extension": ".cpt"
        },
        {
            "name": "Compiled Wireless Markup Language (WMLC)",
            "type": "application/vnd.wap.wmlc",
            "extension": ".wmlc"
        },
        {
            "name": "Computer Graphics Metafile",
            "type": "image/cgm",
            "extension": ".cgm"
        },
        {
            "name": "CoolTalk",
            "type": "x-conference/x-cooltalk",
            "extension": ".ice"
        },
        {
            "name": "Corel Metafile Exchange (CMX)",
            "type": "image/x-cmx",
            "extension": ".cmx"
        },
        {
            "name": "CorelXARA",
            "type": "application/vnd.xara",
            "extension": ".xar"
        },
        {
            "name": "CosmoCaller",
            "type": "application/vnd.cosmocaller",
            "extension": ".cmc"
        },
        {
            "name": "CPIO Archive",
            "type": "application/x-cpio",
            "extension": ".cpio"
        },
        {
            "name": "CrickSoftware - Clicker",
            "type": "application/vnd.crick.clicker",
            "extension": ".clkx"
        },
        {
            "name": "CrickSoftware - Clicker - Keyboard",
            "type": "application/vnd.crick.clicker.keyboard",
            "extension": ".clkk"
        },
        {
            "name": "CrickSoftware - Clicker - Palette",
            "type": "application/vnd.crick.clicker.palette",
            "extension": ".clkp"
        },
        {
            "name": "CrickSoftware - Clicker - Template",
            "type": "application/vnd.crick.clicker.template",
            "extension": ".clkt"
        },
        {
            "name": "CrickSoftware - Clicker - Wordbank",
            "type": "application/vnd.crick.clicker.wordbank",
            "extension": ".clkw"
        },
        {
            "name": "Critical Tools - PERT Chart EXPERT",
            "type": "application/vnd.criticaltools.wbs+xml",
            "extension": ".wbs"
        },
        {
            "name": "CryptoNote",
            "type": "application/vnd.rig.cryptonote",
            "extension": ".cryptonote"
        },
        {
            "name": "Crystallographic Interchange Format",
            "type": "chemical/x-cif",
            "extension": ".cif"
        },
        {
            "name": "CrystalMaker Data Format",
            "type": "chemical/x-cmdf",
            "extension": ".cmdf"
        },
        {
            "name": "CU-SeeMe",
            "type": "application/cu-seeme",
            "extension": ".cu"
        },
        {
            "name": "CU-Writer",
            "type": "application/prs.cww",
            "extension": ".cww"
        },
        {
            "name": "Curl - Applet",
            "type": "text/vnd.curl",
            "extension": ".curl"
        },
        {
            "name": "Curl - Detached Applet",
            "type": "text/vnd.curl.dcurl",
            "extension": ".dcurl"
        },
        {
            "name": "Curl - Manifest File",
            "type": "text/vnd.curl.mcurl",
            "extension": ".mcurl"
        },
        {
            "name": "Curl - Source Code",
            "type": "text/vnd.curl.scurl",
            "extension": ".scurl"
        },
        {
            "name": "CURL Applet",
            "type": "application/vnd.curl.car",
            "extension": ".car"
        },
        {
            "name": "CURL Applet",
            "type": "application/vnd.curl.pcurl",
            "extension": ".pcurl"
        },
        {
            "name": "CustomMenu",
            "type": "application/vnd.yellowriver-custom-menu",
            "extension": ".cmp"
        },
        {
            "name": "Data Structure for the Security Suitability of Cryptographic Algorithms",
            "type": "application/dssc+der",
            "extension": ".dssc"
        },
        {
            "name": "Data Structure for the Security Suitability of Cryptographic Algorithms",
            "type": "application/dssc+xml",
            "extension": ".xdssc"
        },
        {
            "name": "Debian Package",
            "type": "application/x-debian-package",
            "extension": ".deb"
        },
        {
            "name": "DECE Audio",
            "type": "audio/vnd.dece.audio",
            "extension": ".uva"
        },
        {
            "name": "DECE Graphic",
            "type": "image/vnd.dece.graphic",
            "extension": ".uvi"
        },
        {
            "name": "DECE High Definition Video",
            "type": "video/vnd.dece.hd",
            "extension": ".uvh"
        },
        {
            "name": "DECE Mobile Video",
            "type": "video/vnd.dece.mobile",
            "extension": ".uvm"
        },
        {
            "name": "DECE MP4",
            "type": "video/vnd.uvvu.mp4",
            "extension": ".uvu"
        },
        {
            "name": "DECE PD Video",
            "type": "video/vnd.dece.pd",
            "extension": ".uvp"
        },
        {
            "name": "DECE SD Video",
            "type": "video/vnd.dece.sd",
            "extension": ".uvs"
        },
        {
            "name": "DECE Video",
            "type": "video/vnd.dece.video",
            "extension": ".uvv"
        },
        {
            "name": "Device Independent File Format (DVI)",
            "type": "application/x-dvi",
            "extension": ".dvi"
        },
        {
            "name": "Digital Siesmograph Networks - SEED Datafiles",
            "type": "application/vnd.fdsn.seed",
            "extension": ".seed"
        },
        {
            "name": "Digital Talking Book",
            "type": "application/x-dtbook+xml",
            "extension": ".dtb"
        },
        {
            "name": "Digital Talking Book - Resource File",
            "type": "application/x-dtbresource+xml",
            "extension": ".res"
        },
        {
            "name": "Digital Video Broadcasting",
            "type": "application/vnd.dvb.ait",
            "extension": ".ait"
        },
        {
            "name": "Digital Video Broadcasting",
            "type": "application/vnd.dvb.service",
            "extension": ".svc"
        },
        {
            "name": "Digital Winds Music",
            "type": "audio/vnd.digital-winds",
            "extension": ".eol"
        },
        {
            "name": "DjVu",
            "type": "image/vnd.djvu",
            "extension": ".djvu"
        },
        {
            "name": "Document Type Definition",
            "type": "application/xml-dtd",
            "extension": ".dtd"
        },
        {
            "name": "Dolby Meridian Lossless Packing",
            "type": "application/vnd.dolby.mlp",
            "extension": ".mlp"
        },
        {
            "name": "Doom Video Game",
            "type": "application/x-doom",
            "extension": ".wad"
        },
        {
            "name": "DPGraph",
            "type": "application/vnd.dpgraph",
            "extension": ".dpg"
        },
        {
            "name": "DRA Audio",
            "type": "audio/vnd.dra",
            "extension": ".dra"
        },
        {
            "name": "DreamFactory",
            "type": "application/vnd.dreamfactory",
            "extension": ".dfac"
        },
        {
            "name": "DTS Audio",
            "type": "audio/vnd.dts",
            "extension": ".dts"
        },
        {
            "name": "DTS High Definition Audio",
            "type": "audio/vnd.dts.hd",
            "extension": ".dtshd"
        },
        {
            "name": "DWG Drawing",
            "type": "image/vnd.dwg",
            "extension": ".dwg"
        },
        {
            "name": "DynaGeo",
            "type": "application/vnd.dynageo",
            "extension": ".geo"
        },
        {
            "name": "ECMAScript",
            "type": "application/ecmascript",
            "extension": ".es"
        },
        {
            "name": "EcoWin Chart",
            "type": "application/vnd.ecowin.chart",
            "extension": ".mag"
        },
        {
            "name": "EDMICS 2000",
            "type": "image/vnd.fujixerox.edmics-mmr",
            "extension": ".mmr"
        },
        {
            "name": "EDMICS 2000",
            "type": "image/vnd.fujixerox.edmics-rlc",
            "extension": ".rlc"
        },
        {
            "name": "Efficient XML Interchange",
            "type": "application/exi",
            "extension": ".exi"
        },
        {
            "name": "EFI Proteus",
            "type": "application/vnd.proteus.magazine",
            "extension": ".mgz"
        },
        {
            "name": "Electronic Publication",
            "type": "application/epub+zip",
            "extension": ".epub"
        },
        {
            "name": "Email Message",
            "type": "message/rfc822",
            "extension": ".eml"
        },
        {
            "name": "Enliven Viewer",
            "type": "application/vnd.enliven",
            "extension": ".nml"
        },
        {
            "name": "Express by Infoseek",
            "type": "application/vnd.is-xpr",
            "extension": ".xpr"
        },
        {
            "name": "eXtended Image File Format (XIFF)",
            "type": "image/vnd.xiff",
            "extension": ".xif"
        },
        {
            "name": "Extensible Forms Description Language",
            "type": "application/vnd.xfdl",
            "extension": ".xfdl"
        },
        {
            "name": "Extensible MultiModal Annotation",
            "type": "application/emma+xml",
            "extension": ".emma"
        },
        {
            "name": "EZPix Secure Photo Album",
            "type": "application/vnd.ezpix-album",
            "extension": ".ez2"
        },
        {
            "name": "EZPix Secure Photo Album",
            "type": "application/vnd.ezpix-package",
            "extension": ".ez3"
        },
        {
            "name": "FAST Search &amp; Transfer ASA",
            "type": "image/vnd.fst",
            "extension": ".fst"
        },
        {
            "name": "FAST Search &amp; Transfer ASA",
            "type": "video/vnd.fvt",
            "extension": ".fvt"
        },
        {
            "name": "FastBid Sheet",
            "type": "image/vnd.fastbidsheet",
            "extension": ".fbs"
        },
        {
            "name": "FCS Express Layout Link",
            "type": "application/vnd.denovo.fcselayout-link",
            "extension": ".fe_launch"
        },
        {
            "name": "Flash Video",
            "type": "video/x-f4v",
            "extension": ".f4v"
        },
        {
            "name": "Flash Video",
            "type": "video/x-flv",
            "extension": ".flv"
        },
        {
            "name": "FlashPix",
            "type": "image/vnd.fpx",
            "extension": ".fpx"
        },
        {
            "name": "FlashPix",
            "type": "image/vnd.net-fpx",
            "extension": ".npx"
        },
        {
            "name": "FLEXSTOR",
            "type": "text/vnd.fmi.flexstor",
            "extension": ".flx"
        },
        {
            "name": "FLI/FLC Animation Format",
            "type": "video/x-fli",
            "extension": ".fli"
        },
        {
            "name": "FluxTime Clip",
            "type": "application/vnd.fluxtime.clip",
            "extension": ".ftc"
        },
        {
            "name": "Forms Data Format",
            "type": "application/vnd.fdf",
            "extension": ".fdf"
        },
        {
            "name": "Fortran Source File",
            "type": "text/x-fortran",
            "extension": ".f"
        },
        {
            "name": "FrameMaker Interchange Format",
            "type": "application/vnd.mif",
            "extension": ".mif"
        },
        {
            "name": "FrameMaker Normal Format",
            "type": "application/vnd.framemaker",
            "extension": ".fm"
        },
        {
            "name": "FreeHand MX",
            "type": "image/x-freehand",
            "extension": ".fh"
        },
        {
            "name": "Friendly Software Corporation",
            "type": "application/vnd.fsc.weblaunch",
            "extension": ".fsc"
        },
        {
            "name": "Frogans Player",
            "type": "application/vnd.frogans.fnc",
            "extension": ".fnc"
        },
        {
            "name": "Frogans Player",
            "type": "application/vnd.frogans.ltf",
            "extension": ".ltf"
        },
        {
            "name": "Fujitsu - Xerox 2D CAD Data",
            "type": "application/vnd.fujixerox.ddd",
            "extension": ".ddd"
        },
        {
            "name": "Fujitsu - Xerox DocuWorks",
            "type": "application/vnd.fujixerox.docuworks",
            "extension": ".xdw"
        },
        {
            "name": "Fujitsu - Xerox DocuWorks Binder",
            "type": "application/vnd.fujixerox.docuworks.binder",
            "extension": ".xbd"
        },
        {
            "name": "Fujitsu Oasys",
            "type": "application/vnd.fujitsu.oasys",
            "extension": ".oas"
        },
        {
            "name": "Fujitsu Oasys",
            "type": "application/vnd.fujitsu.oasys2",
            "extension": ".oa2"
        },
        {
            "name": "Fujitsu Oasys",
            "type": "application/vnd.fujitsu.oasys3",
            "extension": ".oa3"
        },
        {
            "name": "Fujitsu Oasys",
            "type": "application/vnd.fujitsu.oasysgp",
            "extension": ".fg5"
        },
        {
            "name": "Fujitsu Oasys",
            "type": "application/vnd.fujitsu.oasysprs",
            "extension": ".bh2"
        },
        {
            "name": "FutureSplash Animator",
            "type": "application/x-futuresplash",
            "extension": ".spl"
        },
        {
            "name": "FuzzySheet",
            "type": "application/vnd.fuzzysheet",
            "extension": ".fzs"
        },
        {
            "name": "G3 Fax Image",
            "type": "image/g3fax",
            "extension": ".g3"
        },
        {
            "name": "GameMaker ActiveX",
            "type": "application/vnd.gmx",
            "extension": ".gmx"
        },
        {
            "name": "Gen-Trix Studio",
            "type": "model/vnd.gtw",
            "extension": ".gtw"
        },
        {
            "name": "Genomatix Tuxedo Framework",
            "type": "application/vnd.genomatix.tuxedo",
            "extension": ".txd"
        },
        {
            "name": "GeoGebra",
            "type": "application/vnd.geogebra.file",
            "extension": ".ggb"
        },
        {
            "name": "GeoGebra",
            "type": "application/vnd.geogebra.tool",
            "extension": ".ggt"
        },
        {
            "name": "Geometric Description Language (GDL)",
            "type": "model/vnd.gdl",
            "extension": ".gdl"
        },
        {
            "name": "GeoMetry Explorer",
            "type": "application/vnd.geometry-explorer",
            "extension": ".gex"
        },
        {
            "name": "GEONExT and JSXGraph",
            "type": "application/vnd.geonext",
            "extension": ".gxt"
        },
        {
            "name": "GeoplanW",
            "type": "application/vnd.geoplan",
            "extension": ".g2w"
        },
        {
            "name": "GeospacW",
            "type": "application/vnd.geospace",
            "extension": ".g3w"
        },
        {
            "name": "Ghostscript Font",
            "type": "application/x-font-ghostscript",
            "extension": ".gsf"
        },
        {
            "name": "Glyph Bitmap Distribution Format",
            "type": "application/x-font-bdf",
            "extension": ".bdf"
        },
        {
            "name": "GNU Tar Files",
            "type": "application/x-gtar",
            "extension": ".gtar"
        },
        {
            "name": "GNU Texinfo Document",
            "type": "application/x-texinfo",
            "extension": ".texinfo"
        },
        {
            "name": "Gnumeric",
            "type": "application/x-gnumeric",
            "extension": ".gnumeric"
        },
        {
            "name": "Google Earth - KML",
            "type": "application/vnd.google-earth.kml+xml",
            "extension": ".kml"
        },
        {
            "name": "Google Earth - Zipped KML",
            "type": "application/vnd.google-earth.kmz",
            "extension": ".kmz"
        },
        {
            "name": "GPS eXchange Format",
            "type": "application/gpx+xml",
            "extension": ".gpx"
        },
        {
            "name": "GrafEq",
            "type": "application/vnd.grafeq",
            "extension": ".gqf"
        },
        {
            "name": "Graphics Interchange Format",
            "type": "image/gif",
            "extension": ".gif"
        },
        {
            "name": "Graphviz",
            "type": "text/vnd.graphviz",
            "extension": ".gv"
        },
        {
            "name": "Groove - Account",
            "type": "application/vnd.groove-account",
            "extension": ".gac"
        },
        {
            "name": "Groove - Help",
            "type": "application/vnd.groove-help",
            "extension": ".ghf"
        },
        {
            "name": "Groove - Identity Message",
            "type": "application/vnd.groove-identity-message",
            "extension": ".gim"
        },
        {
            "name": "Groove - Injector",
            "type": "application/vnd.groove-injector",
            "extension": ".grv"
        },
        {
            "name": "Groove - Tool Message",
            "type": "application/vnd.groove-tool-message",
            "extension": ".gtm"
        },
        {
            "name": "Groove - Tool Template",
            "type": "application/vnd.groove-tool-template",
            "extension": ".tpl"
        },
        {
            "name": "Groove - Vcard",
            "type": "application/vnd.groove-vcard",
            "extension": ".vcg"
        },
        {
            "name": "GZip",
            "type": "application/gzip",
            "extension": ".gz"
        },
        {
            "name": "H.261",
            "type": "video/h261",
            "extension": ".h261"
        },
        {
            "name": "H.263",
            "type": "video/h263",
            "extension": ".h263"
        },
        {
            "name": "H.264",
            "type": "video/h264",
            "extension": ".h264"
        },
        {
            "name": "Hewlett Packard Instant Delivery",
            "type": "application/vnd.hp-hpid",
            "extension": ".hpid"
        },
        {
            "name": "Hewlett-Packard's WebPrintSmart",
            "type": "application/vnd.hp-hps",
            "extension": ".hps"
        },
        {
            "name": "Hierarchical Data Format",
            "type": "application/x-hdf",
            "extension": ".hdf"
        },
        {
            "name": "Hit'n'Mix",
            "type": "audio/vnd.rip",
            "extension": ".rip"
        },
        {
            "name": "Homebanking Computer Interface (HBCI)",
            "type": "application/vnd.hbci",
            "extension": ".hbci"
        },
        {
            "name": "HP Indigo Digital Press - Job Layout Languate",
            "type": "application/vnd.hp-jlyt",
            "extension": ".jlt"
        },
        {
            "name": "HP Printer Command Language",
            "type": "application/vnd.hp-pcl",
            "extension": ".pcl"
        },
        {
            "name": "HP-GL/2 and HP RTL",
            "type": "application/vnd.hp-hpgl",
            "extension": ".hpgl"
        },
        {
            "name": "HV Script",
            "type": "application/vnd.yamaha.hv-script",
            "extension": ".hvs"
        },
        {
            "name": "HV Voice Dictionary",
            "type": "application/vnd.yamaha.hv-dic",
            "extension": ".hvd"
        },
        {
            "name": "HV Voice Parameter",
            "type": "application/vnd.yamaha.hv-voice",
            "extension": ".hvp"
        },
        {
            "name": "Hydrostatix Master Suite",
            "type": "application/vnd.hydrostatix.sof-data",
            "extension": ".sfd-hdstx"
        },
        {
            "name": "Hyperstudio",
            "type": "application/hyperstudio",
            "extension": ".stk"
        },
        {
            "name": "Hypertext Application Language",
            "type": "application/vnd.hal+xml",
            "extension": ".hal"
        },
        {
            "name": "HyperText Markup Language (HTML)",
            "type": "text/html",
            "extension": ".html"
        },
        {
            "name": "IBM DB2 Rights Manager",
            "type": "application/vnd.ibm.rights-management",
            "extension": ".irm"
        },
        {
            "name": "IBM Electronic Media Management System - Secure Container",
            "type": "application/vnd.ibm.secure-container",
            "extension": ".sc"
        },
        {
            "name": "iCalendar",
            "type": "text/calendar",
            "extension": ".ics"
        },
        {
            "name": "ICC profile",
            "type": "application/vnd.iccprofile",
            "extension": ".icc"
        },
        {
            "name": "Icon Image",
            "type": "image/x-icon",
            "extension": ".ico"
        },
        {
            "name": "igLoader",
            "type": "application/vnd.igloader",
            "extension": ".igl"
        },
        {
            "name": "Image Exchange Format",
            "type": "image/ief",
            "extension": ".ief"
        },
        {
            "name": "ImmerVision PURE Players",
            "type": "application/vnd.immervision-ivp",
            "extension": ".ivp"
        },
        {
            "name": "ImmerVision PURE Players",
            "type": "application/vnd.immervision-ivu",
            "extension": ".ivu"
        },
        {
            "name": "IMS Networks",
            "type": "application/reginfo+xml",
            "extension": ".rif"
        },
        {
            "name": "In3D - 3DML",
            "type": "text/vnd.in3d.3dml",
            "extension": ".3dml"
        },
        {
            "name": "In3D - 3DML",
            "type": "text/vnd.in3d.spot",
            "extension": ".spot"
        },
        {
            "name": "Initial Graphics Exchange Specification (IGES)",
            "type": "model/iges",
            "extension": ".igs"
        },
        {
            "name": "Interactive Geometry Software",
            "type": "application/vnd.intergeo",
            "extension": ".i2g"
        },
        {
            "name": "Interactive Geometry Software Cinderella",
            "type": "application/vnd.cinderella",
            "extension": ".cdy"
        },
        {
            "name": "Intercon FormNet",
            "type": "application/vnd.intercon.formnet",
            "extension": ".xpw"
        },
        {
            "name": "International Society for Advancement of Cytometry",
            "type": "application/vnd.isac.fcs",
            "extension": ".fcs"
        },
        {
            "name": "Internet Protocol Flow Information Export",
            "type": "application/ipfix",
            "extension": ".ipfix"
        },
        {
            "name": "Internet Public Key Infrastructure - Certificate",
            "type": "application/pkix-cert",
            "extension": ".cer"
        },
        {
            "name": "Internet Public Key Infrastructure - Certificate Management Protocole",
            "type": "application/pkixcmp",
            "extension": ".pki"
        },
        {
            "name": "Internet Public Key Infrastructure - Certificate Revocation Lists",
            "type": "application/pkix-crl",
            "extension": ".crl"
        },
        {
            "name": "Internet Public Key Infrastructure - Certification Path",
            "type": "application/pkix-pkipath",
            "extension": ".pkipath"
        },
        {
            "name": "IOCOM Visimeet",
            "type": "application/vnd.insors.igm",
            "extension": ".igm"
        },
        {
            "name": "IP Unplugged Roaming Client",
            "type": "application/vnd.ipunplugged.rcprofile",
            "extension": ".rcprofile"
        },
        {
            "name": "iRepository / Lucidoc Editor",
            "type": "application/vnd.irepository.package+xml",
            "extension": ".irp"
        },
        {
            "name": "J2ME App Descriptor",
            "type": "text/vnd.sun.j2me.app-descriptor",
            "extension": ".jad"
        },
        {
            "name": "Java Archive",
            "type": "application/java-archive",
            "extension": ".jar"
        },
        {
            "name": "Java Bytecode File",
            "type": "application/java-vm",
            "extension": ".class"
        },
        {
            "name": "Java Network Launching Protocol",
            "type": "application/x-java-jnlp-file",
            "extension": ".jnlp"
        },
        {
            "name": "Java Serialized Object",
            "type": "application/java-serialized-object",
            "extension": ".ser"
        },
        {
            "name": "Java Source File",
            "type": "text/x-java-source,java",
            "extension": ".java"
        },
        {
            "name": "JavaScript",
            "type": "application/javascript",
            "extension": ".js"
        },
        {
            "name": "JavaScript Module",
            "type": "text/javascript",
            "extension": ".mjs"
        },
        {
            "name": "JavaScript Module",
            "type": "text/javascript",
            "extension": ".mjs"
        },
        {
            "name": "JavaScript Object Notation (JSON)",
            "type": "application/json",
            "extension": ".json"
        },
        {
            "name": "Joda Archive",
            "type": "application/vnd.joost.joda-archive",
            "extension": ".joda"
        },
        {
            "name": "JPEG 2000 Compound Image File Format",
            "type": "video/jpm",
            "extension": ".jpm"
        },
        {
            "name": "JPEG Image",
            "type": "image/jpeg",
            "extension": ".jpeg"
        },
        {
            "name": "JPEG Image",
            "type": "image/jpeg",
            "extension": ".jpg"
        },
        {
            "name": "JPEG Image (Progressive)",
            "type": "image/pjpeg",
            "extension": ".pjpeg"
        },
        {
            "name": "JPGVideo",
            "type": "video/jpeg",
            "extension": ".jpgv"
        },
        {
            "name": "JSON - Linked Data",
            "type": "application/ld+json",
            "extension": ".jsonld"
        },
        {
            "name": "Kahootz",
            "type": "application/vnd.kahootz",
            "extension": ".ktz"
        },
        {
            "name": "Karaoke on Chipnuts Chipsets",
            "type": "application/vnd.chipnuts.karaoke-mmd",
            "extension": ".mmd"
        },
        {
            "name": "KDE KOffice Office Suite - Karbon",
            "type": "application/vnd.kde.karbon",
            "extension": ".karbon"
        },
        {
            "name": "KDE KOffice Office Suite - KChart",
            "type": "application/vnd.kde.kchart",
            "extension": ".chrt"
        },
        {
            "name": "KDE KOffice Office Suite - Kformula",
            "type": "application/vnd.kde.kformula",
            "extension": ".kfo"
        },
        {
            "name": "KDE KOffice Office Suite - Kivio",
            "type": "application/vnd.kde.kivio",
            "extension": ".flw"
        },
        {
            "name": "KDE KOffice Office Suite - Kontour",
            "type": "application/vnd.kde.kontour",
            "extension": ".kon"
        },
        {
            "name": "KDE KOffice Office Suite - Kpresenter",
            "type": "application/vnd.kde.kpresenter",
            "extension": ".kpr"
        },
        {
            "name": "KDE KOffice Office Suite - Kspread",
            "type": "application/vnd.kde.kspread",
            "extension": ".ksp"
        },
        {
            "name": "KDE KOffice Office Suite - Kword",
            "type": "application/vnd.kde.kword",
            "extension": ".kwd"
        },
        {
            "name": "Kenamea App",
            "type": "application/vnd.kenameaapp",
            "extension": ".htke"
        },
        {
            "name": "Kidspiration",
            "type": "application/vnd.kidspiration",
            "extension": ".kia"
        },
        {
            "name": "Kinar Applications",
            "type": "application/vnd.kinar",
            "extension": ".kne"
        },
        {
            "name": "Kodak Storyshare",
            "type": "application/vnd.kodak-descriptor",
            "extension": ".sse"
        },
        {
            "name": "Laser App Enterprise",
            "type": "application/vnd.las.las+xml",
            "extension": ".lasxml"
        },
        {
            "name": "LaTeX",
            "type": "application/x-latex",
            "extension": ".latex"
        },
        {
            "name": "Life Balance - Desktop Edition",
            "type": "application/vnd.llamagraphics.life-balance.desktop",
            "extension": ".lbd"
        },
        {
            "name": "Life Balance - Exchange Format",
            "type": "application/vnd.llamagraphics.life-balance.exchange+xml",
            "extension": ".lbe"
        },
        {
            "name": "Lightspeed Audio Lab",
            "type": "application/vnd.jam",
            "extension": ".jam"
        },
        {
            "name": "Lotus 1-2-3",
            "type": "application/vnd.lotus-1-2-3",
            "extension": ".123"
        },
        {
            "name": "Lotus Approach",
            "type": "application/vnd.lotus-approach",
            "extension": ".apr"
        },
        {
            "name": "Lotus Freelance",
            "type": "application/vnd.lotus-freelance",
            "extension": ".pre"
        },
        {
            "name": "Lotus Notes",
            "type": "application/vnd.lotus-notes",
            "extension": ".nsf"
        },
        {
            "name": "Lotus Organizer",
            "type": "application/vnd.lotus-organizer",
            "extension": ".org"
        },
        {
            "name": "Lotus Screencam",
            "type": "application/vnd.lotus-screencam",
            "extension": ".scm"
        },
        {
            "name": "Lotus Wordpro",
            "type": "application/vnd.lotus-wordpro",
            "extension": ".lwp"
        },
        {
            "name": "Lucent Voice",
            "type": "audio/vnd.lucent.voice",
            "extension": ".lvp"
        },
        {
            "name": "M3U (Multimedia Playlist)",
            "type": "audio/x-mpegurl",
            "extension": ".m3u"
        },
        {
            "name": "M4v",
            "type": "video/x-m4v",
            "extension": ".m4v"
        },
        {
            "name": "Macintosh BinHex 4.0",
            "type": "application/mac-binhex40",
            "extension": ".hqx"
        },
        {
            "name": "MacPorts Port System",
            "type": "application/vnd.macports.portpkg",
            "extension": ".portpkg"
        },
        {
            "name": "MapGuide DBXML",
            "type": "application/vnd.osgeo.mapguide.package",
            "extension": ".mgp"
        },
        {
            "name": "MARC Formats",
            "type": "application/marc",
            "extension": ".mrc"
        },
        {
            "name": "MARC21 XML Schema",
            "type": "application/marcxml+xml",
            "extension": ".mrcx"
        },
        {
            "name": "Material Exchange Format",
            "type": "application/mxf",
            "extension": ".mxf"
        },
        {
            "name": "Mathematica Notebook Player",
            "type": "application/vnd.wolfram.player",
            "extension": ".nbp"
        },
        {
            "name": "Mathematica Notebooks",
            "type": "application/mathematica",
            "extension": ".ma"
        },
        {
            "name": "Mathematical Markup Language",
            "type": "application/mathml+xml",
            "extension": ".mathml"
        },
        {
            "name": "Mbox database files",
            "type": "application/mbox",
            "extension": ".mbox"
        },
        {
            "name": "MedCalc",
            "type": "application/vnd.medcalcdata",
            "extension": ".mc1"
        },
        {
            "name": "Media Server Control Markup Language",
            "type": "application/mediaservercontrol+xml",
            "extension": ".mscml"
        },
        {
            "name": "MediaRemote",
            "type": "application/vnd.mediastation.cdkey",
            "extension": ".cdkey"
        },
        {
            "name": "Medical Waveform Encoding Format",
            "type": "application/vnd.mfer",
            "extension": ".mwf"
        },
        {
            "name": "Melody Format for Mobile Platform",
            "type": "application/vnd.mfmp",
            "extension": ".mfm"
        },
        {
            "name": "Mesh Data Type",
            "type": "model/mesh",
            "extension": ".msh"
        },
        {
            "name": "Metadata Authority  Description Schema",
            "type": "application/mads+xml",
            "extension": ".mads"
        },
        {
            "name": "Metadata Encoding and Transmission Standard",
            "type": "application/mets+xml",
            "extension": ".mets"
        },
        {
            "name": "Metadata Object Description Schema",
            "type": "application/mods+xml",
            "extension": ".mods"
        },
        {
            "name": "Metalink",
            "type": "application/metalink4+xml",
            "extension": ".meta4"
        },
        {
            "name": "Micro CADAM Helix D&amp;D",
            "type": "application/vnd.mcd",
            "extension": ".mcd"
        },
        {
            "name": "Micrografx",
            "type": "application/vnd.micrografx.flo",
            "extension": ".flo"
        },
        {
            "name": "Micrografx iGrafx Professional",
            "type": "application/vnd.micrografx.igx",
            "extension": ".igx"
        },
        {
            "name": "MICROSEC e-Szignï¿½",
            "type": "application/vnd.eszigno3+xml",
            "extension": ".es3"
        },
        {
            "name": "Microsoft Access",
            "type": "application/x-msaccess",
            "extension": ".mdb"
        },
        {
            "name": "Microsoft Advanced Systems Format (ASF)",
            "type": "video/x-ms-asf",
            "extension": ".asf"
        },
        {
            "name": "Microsoft Application",
            "type": "application/x-msdownload",
            "extension": ".exe"
        },
        {
            "name": "Microsoft Artgalry",
            "type": "application/vnd.ms-artgalry",
            "extension": ".cil"
        },
        {
            "name": "Microsoft Cabinet File",
            "type": "application/vnd.ms-cab-compressed",
            "extension": ".cab"
        },
        {
            "name": "Microsoft Class Server",
            "type": "application/vnd.ms-ims",
            "extension": ".ims"
        },
        {
            "name": "Microsoft ClickOnce",
            "type": "application/x-ms-application",
            "extension": ".application"
        },
        {
            "name": "Microsoft Clipboard Clip",
            "type": "application/x-msclip",
            "extension": ".clp"
        },
        {
            "name": "Microsoft Document Imaging Format",
            "type": "image/vnd.ms-modi",
            "extension": ".mdi"
        },
        {
            "name": "Microsoft Embedded OpenType",
            "type": "application/vnd.ms-fontobject",
            "extension": ".eot"
        },
        {
            "name": "Microsoft Excel",
            "type": "application/vnd.ms-excel",
            "extension": ".xls"
        },
        {
            "name": "Microsoft Excel - Add-In File",
            "type": "application/vnd.ms-excel.addin.macroenabled.12",
            "extension": ".xlam"
        },
        {
            "name": "Microsoft Excel - Binary Workbook",
            "type": "application/vnd.ms-excel.sheet.binary.macroenabled.12",
            "extension": ".xlsb"
        },
        {
            "name": "Microsoft Excel - Macro-Enabled Template File",
            "type": "application/vnd.ms-excel.template.macroenabled.12",
            "extension": ".xltm"
        },
        {
            "name": "Microsoft Excel - Macro-Enabled Workbook",
            "type": "application/vnd.ms-excel.sheet.macroenabled.12",
            "extension": ".xlsm"
        },
        {
            "name": "Microsoft Html Help File",
            "type": "application/vnd.ms-htmlhelp",
            "extension": ".chm"
        },
        {
            "name": "Microsoft Information Card",
            "type": "application/x-mscardfile",
            "extension": ".crd"
        },
        {
            "name": "Microsoft Learning Resource Module",
            "type": "application/vnd.ms-lrm",
            "extension": ".lrm"
        },
        {
            "name": "Microsoft MediaView",
            "type": "application/x-msmediaview",
            "extension": ".mvb"
        },
        {
            "name": "Microsoft Money",
            "type": "application/x-msmoney",
            "extension": ".mny"
        },
        {
            "name": "Microsoft Office - OOXML - Presentation",
            "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "extension": ".pptx"
        },
        {
            "name": "Microsoft Office - OOXML - Presentation (Slide)",
            "type": "application/vnd.openxmlformats-officedocument.presentationml.slide",
            "extension": ".sldx"
        },
        {
            "name": "Microsoft Office - OOXML - Presentation (Slideshow)",
            "type": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
            "extension": ".ppsx"
        },
        {
            "name": "Microsoft Office - OOXML - Presentation Template",
            "type": "application/vnd.openxmlformats-officedocument.presentationml.template",
            "extension": ".potx"
        },
        {
            "name": "Microsoft Office - OOXML - Spreadsheet",
            "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "extension": ".xlsx"
        },
        {
            "name": "Microsoft Office - OOXML - Spreadsheet Template",
            "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
            "extension": ".xltx"
        },
        {
            "name": "Microsoft Office - OOXML - Word Document",
            "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "extension": ".docx"
        },
        {
            "name": "Microsoft Office - OOXML - Word Document Template",
            "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
            "extension": ".dotx"
        },
        {
            "name": "Microsoft Office Binder",
            "type": "application/x-msbinder",
            "extension": ".obd"
        },
        {
            "name": "Microsoft Office System Release Theme",
            "type": "application/vnd.ms-officetheme",
            "extension": ".thmx"
        },
        {
            "name": "Microsoft OneNote",
            "type": "application/onenote",
            "extension": ".onetoc"
        },
        {
            "name": "Microsoft PlayReady Ecosystem",
            "type": "audio/vnd.ms-playready.media.pya",
            "extension": ".pya"
        },
        {
            "name": "Microsoft PlayReady Ecosystem Video",
            "type": "video/vnd.ms-playready.media.pyv",
            "extension": ".pyv"
        },
        {
            "name": "Microsoft PowerPoint",
            "type": "application/vnd.ms-powerpoint",
            "extension": ".ppt"
        },
        {
            "name": "Microsoft PowerPoint - Add-in file",
            "type": "application/vnd.ms-powerpoint.addin.macroenabled.12",
            "extension": ".ppam"
        },
        {
            "name": "Microsoft PowerPoint - Macro-Enabled Open XML Slide",
            "type": "application/vnd.ms-powerpoint.slide.macroenabled.12",
            "extension": ".sldm"
        },
        {
            "name": "Microsoft PowerPoint - Macro-Enabled Presentation File",
            "type": "application/vnd.ms-powerpoint.presentation.macroenabled.12",
            "extension": ".pptm"
        },
        {
            "name": "Microsoft PowerPoint - Macro-Enabled Slide Show File",
            "type": "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
            "extension": ".ppsm"
        },
        {
            "name": "Microsoft PowerPoint - Macro-Enabled Template File",
            "type": "application/vnd.ms-powerpoint.template.macroenabled.12",
            "extension": ".potm"
        },
        {
            "name": "Microsoft Project",
            "type": "application/vnd.ms-project",
            "extension": ".mpp"
        },
        {
            "name": "Microsoft Publisher",
            "type": "application/x-mspublisher",
            "extension": ".pub"
        },
        {
            "name": "Microsoft Schedule+",
            "type": "application/x-msschedule",
            "extension": ".scd"
        },
        {
            "name": "Microsoft Silverlight",
            "type": "application/x-silverlight-app",
            "extension": ".xap"
        },
        {
            "name": "Microsoft Trust UI Provider - Certificate Trust Link",
            "type": "application/vnd.ms-pki.stl",
            "extension": ".stl"
        },
        {
            "name": "Microsoft Trust UI Provider - Security Catalog",
            "type": "application/vnd.ms-pki.seccat",
            "extension": ".cat"
        },
        {
            "name": "Microsoft Visio",
            "type": "application/vnd.visio",
            "extension": ".vsd"
        },
        {
            "name": "Microsoft Visio 2013",
            "type": "application/vnd.visio2013",
            "extension": ".vsdx"
        },
        {
            "name": "Microsoft Windows Media",
            "type": "video/x-ms-wm",
            "extension": ".wm"
        },
        {
            "name": "Microsoft Windows Media Audio",
            "type": "audio/x-ms-wma",
            "extension": ".wma"
        },
        {
            "name": "Microsoft Windows Media Audio Redirector",
            "type": "audio/x-ms-wax",
            "extension": ".wax"
        },
        {
            "name": "Microsoft Windows Media Audio/Video Playlist",
            "type": "video/x-ms-wmx",
            "extension": ".wmx"
        },
        {
            "name": "Microsoft Windows Media Player Download Package",
            "type": "application/x-ms-wmd",
            "extension": ".wmd"
        },
        {
            "name": "Microsoft Windows Media Player Playlist",
            "type": "application/vnd.ms-wpl",
            "extension": ".wpl"
        },
        {
            "name": "Microsoft Windows Media Player Skin Package",
            "type": "application/x-ms-wmz",
            "extension": ".wmz"
        },
        {
            "name": "Microsoft Windows Media Video",
            "type": "video/x-ms-wmv",
            "extension": ".wmv"
        },
        {
            "name": "Microsoft Windows Media Video Playlist",
            "type": "video/x-ms-wvx",
            "extension": ".wvx"
        },
        {
            "name": "Microsoft Windows Metafile",
            "type": "application/x-msmetafile",
            "extension": ".wmf"
        },
        {
            "name": "Microsoft Windows Terminal Services",
            "type": "application/x-msterminal",
            "extension": ".trm"
        },
        {
            "name": "Microsoft Word",
            "type": "application/msword",
            "extension": ".doc"
        },
        {
            "name": "Microsoft Word - Macro-Enabled Document",
            "type": "application/vnd.ms-word.document.macroenabled.12",
            "extension": ".docm"
        },
        {
            "name": "Microsoft Word - Macro-Enabled Template",
            "type": "application/vnd.ms-word.template.macroenabled.12",
            "extension": ".dotm"
        },
        {
            "name": "Microsoft Wordpad",
            "type": "application/x-mswrite",
            "extension": ".wri"
        },
        {
            "name": "Microsoft Works",
            "type": "application/vnd.ms-works",
            "extension": ".wps"
        },
        {
            "name": "Microsoft XAML Browser Application",
            "type": "application/x-ms-xbap",
            "extension": ".xbap"
        },
        {
            "name": "Microsoft XML Paper Specification",
            "type": "application/vnd.ms-xpsdocument",
            "extension": ".xps"
        },
        {
            "name": "MIDI",
            "type": "audio/midi",
            "extension": ".midi"
        },
        {
            "name": "MIDI - Musical Instrument Digital Interface",
            "type": "audio/midi",
            "extension": ".mid"
        },
        {
            "name": "MiniPay",
            "type": "application/vnd.ibm.minipay",
            "extension": ".mpy"
        },
        {
            "name": "MO:DCA-P",
            "type": "application/vnd.ibm.modcap",
            "extension": ".afp"
        },
        {
            "name": "Mobile Information Device Profile",
            "type": "application/vnd.jcp.javame.midlet-rms",
            "extension": ".rms"
        },
        {
            "name": "MobileTV",
            "type": "application/vnd.tmobile-livetv",
            "extension": ".tmo"
        },
        {
            "name": "Mobipocket",
            "type": "application/x-mobipocket-ebook",
            "extension": ".prc"
        },
        {
            "name": "Mobius Management Systems - Basket file",
            "type": "application/vnd.mobius.mbk",
            "extension": ".mbk"
        },
        {
            "name": "Mobius Management Systems - Distribution Database",
            "type": "application/vnd.mobius.dis",
            "extension": ".dis"
        },
        {
            "name": "Mobius Management Systems - Policy Definition Language File",
            "type": "application/vnd.mobius.plc",
            "extension": ".plc"
        },
        {
            "name": "Mobius Management Systems - Query File",
            "type": "application/vnd.mobius.mqy",
            "extension": ".mqy"
        },
        {
            "name": "Mobius Management Systems - Script Language",
            "type": "application/vnd.mobius.msl",
            "extension": ".msl"
        },
        {
            "name": "Mobius Management Systems - Topic Index File",
            "type": "application/vnd.mobius.txf",
            "extension": ".txf"
        },
        {
            "name": "Mobius Management Systems - UniversalArchive",
            "type": "application/vnd.mobius.daf",
            "extension": ".daf"
        },
        {
            "name": "mod_fly / fly.cgi",
            "type": "text/vnd.fly",
            "extension": ".fly"
        },
        {
            "name": "Mophun Certificate",
            "type": "application/vnd.mophun.certificate",
            "extension": ".mpc"
        },
        {
            "name": "Mophun VM",
            "type": "application/vnd.mophun.application",
            "extension": ".mpn"
        },
        {
            "name": "Motion JPEG 2000",
            "type": "video/mj2",
            "extension": ".mj2"
        },
        {
            "name": "MPEG Audio",
            "type": "audio/mpeg",
            "extension": ".mpga"
        },
        {
            "name": "MPEG Transport Stream",
            "type": "video/mp2t",
            "extension": ".ts"
        },
        {
            "name": "MPEG Url",
            "type": "video/vnd.mpegurl",
            "extension": ".mxu"
        },
        {
            "name": "MPEG Video",
            "type": "video/mpeg",
            "extension": ".mpeg"
        },
        {
            "name": "MPEG-21",
            "type": "application/mp21",
            "extension": ".m21"
        },
        {
            "name": "MPEG-4 Audio",
            "type": "audio/mp4",
            "extension": ".mp4a"
        },
        {
            "name": "MPEG-4 Video",
            "type": "video/mp4",
            "extension": ".mp4"
        },
        {
            "name": "MPEG4",
            "type": "application/mp4",
            "extension": ".mp4"
        },
        {
            "name": "Multimedia Playlist Unicode",
            "type": "application/vnd.apple.mpegurl",
            "extension": ".m3u8"
        },
        {
            "name": "MUsical Score Interpreted Code Invented  for the ASCII designation of Notation",
            "type": "application/vnd.musician",
            "extension": ".mus"
        },
        {
            "name": "Muvee Automatic Video Editing",
            "type": "application/vnd.muvee.style",
            "extension": ".msty"
        },
        {
            "name": "MXML",
            "type": "application/xv+xml",
            "extension": ".mxml"
        },
        {
            "name": "N-Gage Game Data",
            "type": "application/vnd.nokia.n-gage.data",
            "extension": ".ngdat"
        },
        {
            "name": "N-Gage Game Installer",
            "type": "application/vnd.nokia.n-gage.symbian.install",
            "extension": ".n-gage"
        },
        {
            "name": "Navigation Control file for XML (for ePub)",
            "type": "application/x-dtbncx+xml",
            "extension": ".ncx"
        },
        {
            "name": "Network Common Data Form (NetCDF)",
            "type": "application/x-netcdf",
            "extension": ".nc"
        },
        {
            "name": "neuroLanguage",
            "type": "application/vnd.neurolanguage.nlu",
            "extension": ".nlu"
        },
        {
            "name": "New Moon Liftoff/DNA",
            "type": "application/vnd.dna",
            "extension": ".dna"
        },
        {
            "name": "NobleNet Directory",
            "type": "application/vnd.noblenet-directory",
            "extension": ".nnd"
        },
        {
            "name": "NobleNet Sealer",
            "type": "application/vnd.noblenet-sealer",
            "extension": ".nns"
        },
        {
            "name": "NobleNet Web",
            "type": "application/vnd.noblenet-web",
            "extension": ".nnw"
        },
        {
            "name": "Nokia Radio Application - Preset",
            "type": "application/vnd.nokia.radio-preset",
            "extension": ".rpst"
        },
        {
            "name": "Nokia Radio Application - Preset",
            "type": "application/vnd.nokia.radio-presets",
            "extension": ".rpss"
        },
        {
            "name": "Notation3",
            "type": "text/n3",
            "extension": ".n3"
        },
        {
            "name": "Novadigm's RADIA and EDM products",
            "type": "application/vnd.novadigm.edm",
            "extension": ".edm"
        },
        {
            "name": "Novadigm's RADIA and EDM products",
            "type": "application/vnd.novadigm.edx",
            "extension": ".edx"
        },
        {
            "name": "Novadigm's RADIA and EDM products",
            "type": "application/vnd.novadigm.ext",
            "extension": ".ext"
        },
        {
            "name": "NpGraphIt",
            "type": "application/vnd.flographit",
            "extension": ".gph"
        },
        {
            "name": "Nuera ECELP 4800",
            "type": "audio/vnd.nuera.ecelp4800",
            "extension": ".ecelp4800"
        },
        {
            "name": "Nuera ECELP 7470",
            "type": "audio/vnd.nuera.ecelp7470",
            "extension": ".ecelp7470"
        },
        {
            "name": "Nuera ECELP 9600",
            "type": "audio/vnd.nuera.ecelp9600",
            "extension": ".ecelp9600"
        },
        {
            "name": "Office Document Architecture",
            "type": "application/oda",
            "extension": ".oda"
        },
        {
            "name": "Ogg",
            "type": "application/ogg",
            "extension": ".ogx"
        },
        {
            "name": "Ogg Audio",
            "type": "audio/ogg",
            "extension": ".oga"
        },
        {
            "name": "Ogg Video",
            "type": "video/ogg",
            "extension": ".ogv"
        },
        {
            "name": "OMA Download Agents",
            "type": "application/vnd.oma.dd2+xml",
            "extension": ".dd2"
        },
        {
            "name": "Open Document Text Web",
            "type": "application/vnd.oasis.opendocument.text-web",
            "extension": ".oth"
        },
        {
            "name": "Open eBook Publication Structure",
            "type": "application/oebps-package+xml",
            "extension": ".opf"
        },
        {
            "name": "Open Financial Exchange",
            "type": "application/vnd.intu.qbo",
            "extension": ".qbo"
        },
        {
            "name": "Open Office Extension",
            "type": "application/vnd.openofficeorg.extension",
            "extension": ".oxt"
        },
        {
            "name": "Open Score Format",
            "type": "application/vnd.yamaha.openscoreformat",
            "extension": ".osf"
        },
        {
            "name": "Open Web Media Project - Audio",
            "type": "audio/webm",
            "extension": ".weba"
        },
        {
            "name": "Open Web Media Project - Video",
            "type": "video/webm",
            "extension": ".webm"
        },
        {
            "name": "OpenDocument Chart",
            "type": "application/vnd.oasis.opendocument.chart",
            "extension": ".odc"
        },
        {
            "name": "OpenDocument Chart Template",
            "type": "application/vnd.oasis.opendocument.chart-template",
            "extension": ".otc"
        },
        {
            "name": "OpenDocument Database",
            "type": "application/vnd.oasis.opendocument.database",
            "extension": ".odb"
        },
        {
            "name": "OpenDocument Formula",
            "type": "application/vnd.oasis.opendocument.formula",
            "extension": ".odf"
        },
        {
            "name": "OpenDocument Formula Template",
            "type": "application/vnd.oasis.opendocument.formula-template",
            "extension": ".odft"
        },
        {
            "name": "OpenDocument Graphics",
            "type": "application/vnd.oasis.opendocument.graphics",
            "extension": ".odg"
        },
        {
            "name": "OpenDocument Graphics Template",
            "type": "application/vnd.oasis.opendocument.graphics-template",
            "extension": ".otg"
        },
        {
            "name": "OpenDocument Image",
            "type": "application/vnd.oasis.opendocument.image",
            "extension": ".odi"
        },
        {
            "name": "OpenDocument Image Template",
            "type": "application/vnd.oasis.opendocument.image-template",
            "extension": ".oti"
        },
        {
            "name": "OpenDocument Presentation",
            "type": "application/vnd.oasis.opendocument.presentation",
            "extension": ".odp"
        },
        {
            "name": "OpenDocument Presentation Template",
            "type": "application/vnd.oasis.opendocument.presentation-template",
            "extension": ".otp"
        },
        {
            "name": "OpenDocument Spreadsheet",
            "type": "application/vnd.oasis.opendocument.spreadsheet",
            "extension": ".ods"
        },
        {
            "name": "OpenDocument Spreadsheet Template",
            "type": "application/vnd.oasis.opendocument.spreadsheet-template",
            "extension": ".ots"
        },
        {
            "name": "OpenDocument Text",
            "type": "application/vnd.oasis.opendocument.text",
            "extension": ".odt"
        },
        {
            "name": "OpenDocument Text Master",
            "type": "application/vnd.oasis.opendocument.text-master",
            "extension": ".odm"
        },
        {
            "name": "OpenDocument Text Template",
            "type": "application/vnd.oasis.opendocument.text-template",
            "extension": ".ott"
        },
        {
            "name": "OpenGL Textures (KTX)",
            "type": "image/ktx",
            "extension": ".ktx"
        },
        {
            "name": "OpenOffice - Calc (Spreadsheet)",
            "type": "application/vnd.sun.xml.calc",
            "extension": ".sxc"
        },
        {
            "name": "OpenOffice - Calc Template (Spreadsheet)",
            "type": "application/vnd.sun.xml.calc.template",
            "extension": ".stc"
        },
        {
            "name": "OpenOffice - Draw (Graphics)",
            "type": "application/vnd.sun.xml.draw",
            "extension": ".sxd"
        },
        {
            "name": "OpenOffice - Draw Template (Graphics)",
            "type": "application/vnd.sun.xml.draw.template",
            "extension": ".std"
        },
        {
            "name": "OpenOffice - Impress (Presentation)",
            "type": "application/vnd.sun.xml.impress",
            "extension": ".sxi"
        },
        {
            "name": "OpenOffice - Impress Template (Presentation)",
            "type": "application/vnd.sun.xml.impress.template",
            "extension": ".sti"
        },
        {
            "name": "OpenOffice - Math (Formula)",
            "type": "application/vnd.sun.xml.math",
            "extension": ".sxm"
        },
        {
            "name": "OpenOffice - Writer (Text - HTML)",
            "type": "application/vnd.sun.xml.writer",
            "extension": ".sxw"
        },
        {
            "name": "OpenOffice - Writer (Text - HTML)",
            "type": "application/vnd.sun.xml.writer.global",
            "extension": ".sxg"
        },
        {
            "name": "OpenOffice - Writer Template (Text - HTML)",
            "type": "application/vnd.sun.xml.writer.template",
            "extension": ".stw"
        },
        {
            "name": "OpenType Font File",
            "type": "application/x-font-otf",
            "extension": ".otf"
        },
        {
            "name": "Opus Audio",
            "type": "audio/opus",
            "extension": ".opus"
        },
        {
            "name": "OSFPVG",
            "type": "application/vnd.yamaha.openscoreformat.osfpvg+xml",
            "extension": ".osfpvg"
        },
        {
            "name": "OSGi Deployment Package",
            "type": "application/vnd.osgi.dp",
            "extension": ".dp"
        },
        {
            "name": "PalmOS Data",
            "type": "application/vnd.palm",
            "extension": ".pdb"
        },
        {
            "name": "Pascal Source File",
            "type": "text/x-pascal",
            "extension": ".p"
        },
        {
            "name": "PawaaFILE",
            "type": "application/vnd.pawaafile",
            "extension": ".paw"
        },
        {
            "name": "PCL 6 Enhanced (Formely PCL XL)",
            "type": "application/vnd.hp-pclxl",
            "extension": ".pclxl"
        },
        {
            "name": "Pcsel eFIF File",
            "type": "application/vnd.picsel",
            "extension": ".efif"
        },
        {
            "name": "PCX Image",
            "type": "image/x-pcx",
            "extension": ".pcx"
        },
        {
            "name": "Photoshop Document",
            "type": "image/vnd.adobe.photoshop",
            "extension": ".psd"
        },
        {
            "name": "PICSRules",
            "type": "application/pics-rules",
            "extension": ".prf"
        },
        {
            "name": "PICT Image",
            "type": "image/x-pict",
            "extension": ".pic"
        },
        {
            "name": "pIRCh",
            "type": "application/x-chat",
            "extension": ".chat"
        },
        {
            "name": "PKCS #10 - Certification Request Standard",
            "type": "application/pkcs10",
            "extension": ".p10"
        },
        {
            "name": "PKCS #12 - Personal Information Exchange Syntax Standard",
            "type": "application/x-pkcs12",
            "extension": ".p12"
        },
        {
            "name": "PKCS #7 - Cryptographic Message Syntax Standard",
            "type": "application/pkcs7-mime",
            "extension": ".p7m"
        },
        {
            "name": "PKCS #7 - Cryptographic Message Syntax Standard",
            "type": "application/pkcs7-signature",
            "extension": ".p7s"
        },
        {
            "name": "PKCS #7 - Cryptographic Message Syntax Standard (Certificate Request Response)",
            "type": "application/x-pkcs7-certreqresp",
            "extension": ".p7r"
        },
        {
            "name": "PKCS #7 - Cryptographic Message Syntax Standard (Certificates)",
            "type": "application/x-pkcs7-certificates",
            "extension": ".p7b"
        },
        {
            "name": "PKCS #8 - Private-Key Information Syntax Standard",
            "type": "application/pkcs8",
            "extension": ".p8"
        },
        {
            "name": "PocketLearn Viewers",
            "type": "application/vnd.pocketlearn",
            "extension": ".plf"
        },
        {
            "name": "Portable Anymap Image",
            "type": "image/x-portable-anymap",
            "extension": ".pnm"
        },
        {
            "name": "Portable Bitmap Format",
            "type": "image/x-portable-bitmap",
            "extension": ".pbm"
        },
        {
            "name": "Portable Compiled Format",
            "type": "application/x-font-pcf",
            "extension": ".pcf"
        },
        {
            "name": "Portable Font Resource",
            "type": "application/font-tdpfr",
            "extension": ".pfr"
        },
        {
            "name": "Portable Game Notation (Chess Games)",
            "type": "application/x-chess-pgn",
            "extension": ".pgn"
        },
        {
            "name": "Portable Graymap Format",
            "type": "image/x-portable-graymap",
            "extension": ".pgm"
        },
        {
            "name": "Portable Network Graphics (PNG)",
            "type": "image/png",
            "extension": ".png"
        },
        {
            "name": "Portable Network Graphics (PNG) (Citrix client)",
            "type": "image/x-citrix-png",
            "extension": ".png"
        },
        {
            "name": "Portable Network Graphics (PNG) (x-token)",
            "type": "image/x-png",
            "extension": ".png"
        },
        {
            "name": "Portable Pixmap Format",
            "type": "image/x-portable-pixmap",
            "extension": ".ppm"
        },
        {
            "name": "Portable Symmetric Key Container",
            "type": "application/pskc+xml",
            "extension": ".pskcxml"
        },
        {
            "name": "PosML",
            "type": "application/vnd.ctc-posml",
            "extension": ".pml"
        },
        {
            "name": "PostScript",
            "type": "application/postscript",
            "extension": ".ai"
        },
        {
            "name": "PostScript Fonts",
            "type": "application/x-font-type1",
            "extension": ".pfa"
        },
        {
            "name": "PowerBuilder",
            "type": "application/vnd.powerbuilder6",
            "extension": ".pbd"
        },
        {
            "name": "Pretty Good Privacy",
            "type": "application/pgp-encrypted",
            "extension": ".pgp"
        },
        {
            "name": "Pretty Good Privacy - Signature",
            "type": "application/pgp-signature",
            "extension": ".pgp"
        },
        {
            "name": "Preview Systems ZipLock/VBox",
            "type": "application/vnd.previewsystems.box",
            "extension": ".box"
        },
        {
            "name": "Princeton Video Image",
            "type": "application/vnd.pvi.ptid1",
            "extension": ".ptid"
        },
        {
            "name": "Pronunciation Lexicon Specification",
            "type": "application/pls+xml",
            "extension": ".pls"
        },
        {
            "name": "Proprietary P&amp;G Standard Reporting System",
            "type": "application/vnd.pg.format",
            "extension": ".str"
        },
        {
            "name": "Proprietary P&amp;G Standard Reporting System",
            "type": "application/vnd.pg.osasli",
            "extension": ".ei6"
        },
        {
            "name": "PRS Lines Tag",
            "type": "text/prs.lines.tag",
            "extension": ".dsc"
        },
        {
            "name": "PSF Fonts",
            "type": "application/x-font-linux-psf",
            "extension": ".psf"
        },
        {
            "name": "PubliShare Objects",
            "type": "application/vnd.publishare-delta-tree",
            "extension": ".qps"
        },
        {
            "name": "Qualcomm's Plaza Mobile Internet",
            "type": "application/vnd.pmi.widget",
            "extension": ".wg"
        },
        {
            "name": "QuarkXpress",
            "type": "application/vnd.quark.quarkxpress",
            "extension": ".qxd"
        },
        {
            "name": "QUASS Stream Player",
            "type": "application/vnd.epson.esf",
            "extension": ".esf"
        },
        {
            "name": "QUASS Stream Player",
            "type": "application/vnd.epson.msf",
            "extension": ".msf"
        },
        {
            "name": "QUASS Stream Player",
            "type": "application/vnd.epson.ssf",
            "extension": ".ssf"
        },
        {
            "name": "QuickAnime Player",
            "type": "application/vnd.epson.quickanime",
            "extension": ".qam"
        },
        {
            "name": "Quicken",
            "type": "application/vnd.intu.qfx",
            "extension": ".qfx"
        },
        {
            "name": "Quicktime Video",
            "type": "video/quicktime",
            "extension": ".qt"
        },
        {
            "name": "RAR Archive",
            "type": "application/x-rar-compressed",
            "extension": ".rar"
        },
        {
            "name": "Real Audio Sound",
            "type": "audio/x-pn-realaudio",
            "extension": ".ram"
        },
        {
            "name": "Real Audio Sound",
            "type": "audio/x-pn-realaudio-plugin",
            "extension": ".rmp"
        },
        {
            "name": "Really Simple Discovery",
            "type": "application/rsd+xml",
            "extension": ".rsd"
        },
        {
            "name": "RealMedia",
            "type": "application/vnd.rn-realmedia",
            "extension": ".rm"
        },
        {
            "name": "RealVNC",
            "type": "application/vnd.realvnc.bed",
            "extension": ".bed"
        },
        {
            "name": "Recordare Applications",
            "type": "application/vnd.recordare.musicxml",
            "extension": ".mxl"
        },
        {
            "name": "Recordare Applications",
            "type": "application/vnd.recordare.musicxml+xml",
            "extension": ".musicxml"
        },
        {
            "name": "Relax NG Compact Syntax",
            "type": "application/relax-ng-compact-syntax",
            "extension": ".rnc"
        },
        {
            "name": "RemoteDocs R-Viewer",
            "type": "application/vnd.data-vision.rdz",
            "extension": ".rdz"
        },
        {
            "name": "Resource Description Framework",
            "type": "application/rdf+xml",
            "extension": ".rdf"
        },
        {
            "name": "RetroPlatform Player",
            "type": "application/vnd.cloanto.rp9",
            "extension": ".rp9"
        },
        {
            "name": "RhymBox",
            "type": "application/vnd.jisp",
            "extension": ".jisp"
        },
        {
            "name": "Rich Text Format",
            "type": "application/rtf",
            "extension": ".rtf"
        },
        {
            "name": "Rich Text Format (RTF)",
            "type": "text/richtext",
            "extension": ".rtx"
        },
        {
            "name": "ROUTE 66 Location Based Services",
            "type": "application/vnd.route66.link66+xml",
            "extension": ".link66"
        },
        {
            "name": "RSS - Really Simple Syndication",
            "type": "application/rss+xml",
            "extension": ".rss"
        },
        {
            "name": "S Hexdump Format",
            "type": "application/shf+xml",
            "extension": ".shf"
        },
        {
            "name": "SailingTracker",
            "type": "application/vnd.sailingtracker.track",
            "extension": ".st"
        },
        {
            "name": "Scalable Vector Graphics (SVG)",
            "type": "image/svg+xml",
            "extension": ".svg"
        },
        {
            "name": "ScheduleUs",
            "type": "application/vnd.sus-calendar",
            "extension": ".sus"
        },
        {
            "name": "Search/Retrieve via URL Response Format",
            "type": "application/sru+xml",
            "extension": ".sru"
        },
        {
            "name": "Secure Electronic Transaction - Payment",
            "type": "application/set-payment-initiation",
            "extension": ".setpay"
        },
        {
            "name": "Secure Electronic Transaction - Registration",
            "type": "application/set-registration-initiation",
            "extension": ".setreg"
        },
        {
            "name": "Secured eMail",
            "type": "application/vnd.sema",
            "extension": ".sema"
        },
        {
            "name": "Secured eMail",
            "type": "application/vnd.semd",
            "extension": ".semd"
        },
        {
            "name": "Secured eMail",
            "type": "application/vnd.semf",
            "extension": ".semf"
        },
        {
            "name": "SeeMail",
            "type": "application/vnd.seemail",
            "extension": ".see"
        },
        {
            "name": "Server Normal Format",
            "type": "application/x-font-snf",
            "extension": ".snf"
        },
        {
            "name": "Server-Based Certificate Validation Protocol - Validation Policies - Request",
            "type": "application/scvp-vp-request",
            "extension": ".spq"
        },
        {
            "name": "Server-Based Certificate Validation Protocol - Validation Policies - Response",
            "type": "application/scvp-vp-response",
            "extension": ".spp"
        },
        {
            "name": "Server-Based Certificate Validation Protocol - Validation Request",
            "type": "application/scvp-cv-request",
            "extension": ".scq"
        },
        {
            "name": "Server-Based Certificate Validation Protocol - Validation Response",
            "type": "application/scvp-cv-response",
            "extension": ".scs"
        },
        {
            "name": "Session Description Protocol",
            "type": "application/sdp",
            "extension": ".sdp"
        },
        {
            "name": "Setext",
            "type": "text/x-setext",
            "extension": ".etx"
        },
        {
            "name": "SGI Movie",
            "type": "video/x-sgi-movie",
            "extension": ".movie"
        },
        {
            "name": "Shana Informed Filler",
            "type": "application/vnd.shana.informed.formdata",
            "extension": ".ifm"
        },
        {
            "name": "Shana Informed Filler",
            "type": "application/vnd.shana.informed.formtemplate",
            "extension": ".itp"
        },
        {
            "name": "Shana Informed Filler",
            "type": "application/vnd.shana.informed.interchange",
            "extension": ".iif"
        },
        {
            "name": "Shana Informed Filler",
            "type": "application/vnd.shana.informed.package",
            "extension": ".ipk"
        },
        {
            "name": "Sharing Transaction Fraud Data",
            "type": "application/thraud+xml",
            "extension": ".tfi"
        },
        {
            "name": "Shell Archive",
            "type": "application/x-shar",
            "extension": ".shar"
        },
        {
            "name": "Silicon Graphics RGB Bitmap",
            "type": "image/x-rgb",
            "extension": ".rgb"
        },
        {
            "name": "SimpleAnimeLite Player",
            "type": "application/vnd.epson.salt",
            "extension": ".slt"
        },
        {
            "name": "Simply Accounting",
            "type": "application/vnd.accpac.simply.aso",
            "extension": ".aso"
        },
        {
            "name": "Simply Accounting - Data Import",
            "type": "application/vnd.accpac.simply.imp",
            "extension": ".imp"
        },
        {
            "name": "SimTech MindMapper",
            "type": "application/vnd.simtech-mindmapper",
            "extension": ".twd"
        },
        {
            "name": "Sixth Floor Media - CommonSpace",
            "type": "application/vnd.commonspace",
            "extension": ".csp"
        },
        {
            "name": "SMAF Audio",
            "type": "application/vnd.yamaha.smaf-audio",
            "extension": ".saf"
        },
        {
            "name": "SMAF File",
            "type": "application/vnd.smaf",
            "extension": ".mmf"
        },
        {
            "name": "SMAF Phrase",
            "type": "application/vnd.yamaha.smaf-phrase",
            "extension": ".spf"
        },
        {
            "name": "SMART Technologies Apps",
            "type": "application/vnd.smart.teacher",
            "extension": ".teacher"
        },
        {
            "name": "SourceView Document",
            "type": "application/vnd.svd",
            "extension": ".svd"
        },
        {
            "name": "SPARQL - Query",
            "type": "application/sparql-query",
            "extension": ".rq"
        },
        {
            "name": "SPARQL - Results",
            "type": "application/sparql-results+xml",
            "extension": ".srx"
        },
        {
            "name": "Speech Recognition Grammar Specification",
            "type": "application/srgs",
            "extension": ".gram"
        },
        {
            "name": "Speech Recognition Grammar Specification - XML",
            "type": "application/srgs+xml",
            "extension": ".grxml"
        },
        {
            "name": "Speech Synthesis Markup Language",
            "type": "application/ssml+xml",
            "extension": ".ssml"
        },
        {
            "name": "SSEYO Koan Play File",
            "type": "application/vnd.koan",
            "extension": ".skp"
        },
        {
            "name": "Standard Generalized Markup Language (SGML)",
            "type": "text/sgml",
            "extension": ".sgml"
        },
        {
            "name": "StarOffice - Calc",
            "type": "application/vnd.stardivision.calc",
            "extension": ".sdc"
        },
        {
            "name": "StarOffice - Draw",
            "type": "application/vnd.stardivision.draw",
            "extension": ".sda"
        },
        {
            "name": "StarOffice - Impress",
            "type": "application/vnd.stardivision.impress",
            "extension": ".sdd"
        },
        {
            "name": "StarOffice - Math",
            "type": "application/vnd.stardivision.math",
            "extension": ".smf"
        },
        {
            "name": "StarOffice - Writer",
            "type": "application/vnd.stardivision.writer",
            "extension": ".sdw"
        },
        {
            "name": "StarOffice - Writer  (Global)",
            "type": "application/vnd.stardivision.writer-global",
            "extension": ".sgl"
        },
        {
            "name": "StepMania",
            "type": "application/vnd.stepmania.stepchart",
            "extension": ".sm"
        },
        {
            "name": "Stuffit Archive",
            "type": "application/x-stuffit",
            "extension": ".sit"
        },
        {
            "name": "Stuffit Archive",
            "type": "application/x-stuffitx",
            "extension": ".sitx"
        },
        {
            "name": "SudokuMagic",
            "type": "application/vnd.solent.sdkm+xml",
            "extension": ".sdkm"
        },
        {
            "name": "Sugar Linux Application Bundle",
            "type": "application/vnd.olpc-sugar",
            "extension": ".xo"
        },
        {
            "name": "Sun Audio - Au file format",
            "type": "audio/basic",
            "extension": ".au"
        },
        {
            "name": "SundaHus WQ",
            "type": "application/vnd.wqd",
            "extension": ".wqd"
        },
        {
            "name": "Symbian Install Package",
            "type": "application/vnd.symbian.install",
            "extension": ".sis"
        },
        {
            "name": "Synchronized Multimedia Integration Language",
            "type": "application/smil+xml",
            "extension": ".smi"
        },
        {
            "name": "SyncML",
            "type": "application/vnd.syncml+xml",
            "extension": ".xsm"
        },
        {
            "name": "SyncML - Device Management",
            "type": "application/vnd.syncml.dm+wbxml",
            "extension": ".bdm"
        },
        {
            "name": "SyncML - Device Management",
            "type": "application/vnd.syncml.dm+xml",
            "extension": ".xdm"
        },
        {
            "name": "System V Release 4 CPIO Archive",
            "type": "application/x-sv4cpio",
            "extension": ".sv4cpio"
        },
        {
            "name": "System V Release 4 CPIO Checksum Data",
            "type": "application/x-sv4crc",
            "extension": ".sv4crc"
        },
        {
            "name": "Systems Biology Markup Language",
            "type": "application/sbml+xml",
            "extension": ".sbml"
        },
        {
            "name": "Tab Seperated Values",
            "type": "text/tab-separated-values",
            "extension": ".tsv"
        },
        {
            "name": "Tagged Image File Format",
            "type": "image/tiff",
            "extension": ".tiff"
        },
        {
            "name": "Tao Intent",
            "type": "application/vnd.tao.intent-module-archive",
            "extension": ".tao"
        },
        {
            "name": "Tar File (Tape Archive)",
            "type": "application/x-tar",
            "extension": ".tar"
        },
        {
            "name": "Tcl Script",
            "type": "application/x-tcl",
            "extension": ".tcl"
        },
        {
            "name": "TeX",
            "type": "application/x-tex",
            "extension": ".tex"
        },
        {
            "name": "TeX Font Metric",
            "type": "application/x-tex-tfm",
            "extension": ".tfm"
        },
        {
            "name": "Text Encoding and Interchange",
            "type": "application/tei+xml",
            "extension": ".tei"
        },
        {
            "name": "Text File",
            "type": "text/plain",
            "extension": ".txt"
        },
        {
            "name": "TIBCO Spotfire",
            "type": "application/vnd.spotfire.dxp",
            "extension": ".dxp"
        },
        {
            "name": "TIBCO Spotfire",
            "type": "application/vnd.spotfire.sfs",
            "extension": ".sfs"
        },
        {
            "name": "Time Stamped Data Envelope",
            "type": "application/timestamped-data",
            "extension": ".tsd"
        },
        {
            "name": "TRI Systems Config",
            "type": "application/vnd.trid.tpt",
            "extension": ".tpt"
        },
        {
            "name": "Triscape Map Explorer",
            "type": "application/vnd.triscape.mxs",
            "extension": ".mxs"
        },
        {
            "name": "troff",
            "type": "text/troff",
            "extension": ".t"
        },
        {
            "name": "True BASIC",
            "type": "application/vnd.trueapp",
            "extension": ".tra"
        },
        {
            "name": "TrueType Font",
            "type": "application/x-font-ttf",
            "extension": ".ttf"
        },
        {
            "name": "Turtle (Terse RDF Triple Language)",
            "type": "text/turtle",
            "extension": ".ttl"
        },
        {
            "name": "UMAJIN",
            "type": "application/vnd.umajin",
            "extension": ".umj"
        },
        {
            "name": "Unique Object Markup Language",
            "type": "application/vnd.uoml+xml",
            "extension": ".uoml"
        },
        {
            "name": "Unity 3d",
            "type": "application/vnd.unity",
            "extension": ".unityweb"
        },
        {
            "name": "Universal Forms Description Language",
            "type": "application/vnd.ufdl",
            "extension": ".ufd"
        },
        {
            "name": "URI Resolution Services",
            "type": "text/uri-list",
            "extension": ".uri"
        },
        {
            "name": "User Interface Quartz - Theme (Symbian)",
            "type": "application/vnd.uiq.theme",
            "extension": ".utz"
        },
        {
            "name": "Ustar (Uniform Standard Tape Archive)",
            "type": "application/x-ustar",
            "extension": ".ustar"
        },
        {
            "name": "UUEncode",
            "type": "text/x-uuencode",
            "extension": ".uu"
        },
        {
            "name": "vCalendar",
            "type": "text/x-vcalendar",
            "extension": ".vcs"
        },
        {
            "name": "vCard",
            "type": "text/x-vcard",
            "extension": ".vcf"
        },
        {
            "name": "Video CD",
            "type": "application/x-cdlink",
            "extension": ".vcd"
        },
        {
            "name": "Viewport+",
            "type": "application/vnd.vsf",
            "extension": ".vsf"
        },
        {
            "name": "Virtual Reality Modeling Language",
            "type": "model/vrml",
            "extension": ".wrl"
        },
        {
            "name": "VirtualCatalog",
            "type": "application/vnd.vcx",
            "extension": ".vcx"
        },
        {
            "name": "Virtue MTS",
            "type": "model/vnd.mts",
            "extension": ".mts"
        },
        {
            "name": "Virtue VTU",
            "type": "model/vnd.vtu",
            "extension": ".vtu"
        },
        {
            "name": "Visionary",
            "type": "application/vnd.visionary",
            "extension": ".vis"
        },
        {
            "name": "Vivo",
            "type": "video/vnd.vivo",
            "extension": ".viv"
        },
        {
            "name": "Voice Browser Call Control",
            "type": "application/ccxml+xml,",
            "extension": ".ccxml"
        },
        {
            "name": "VoiceXML",
            "type": "application/voicexml+xml",
            "extension": ".vxml"
        },
        {
            "name": "WAIS Source",
            "type": "application/x-wais-source",
            "extension": ".src"
        },
        {
            "name": "WAP Binary XML (WBXML)",
            "type": "application/vnd.wap.wbxml",
            "extension": ".wbxml"
        },
        {
            "name": "WAP Bitamp (WBMP)",
            "type": "image/vnd.wap.wbmp",
            "extension": ".wbmp"
        },
        {
            "name": "Waveform Audio File Format (WAV)",
            "type": "audio/x-wav",
            "extension": ".wav"
        },
        {
            "name": "Web Distributed Authoring and Versioning",
            "type": "application/davmount+xml",
            "extension": ".davmount"
        },
        {
            "name": "Web Open Font Format",
            "type": "application/x-font-woff",
            "extension": ".woff"
        },
        {
            "name": "Web Services Policy",
            "type": "application/wspolicy+xml",
            "extension": ".wspolicy"
        },
        {
            "name": "WebP Image",
            "type": "image/webp",
            "extension": ".webp"
        },
        {
            "name": "WebTurbo",
            "type": "application/vnd.webturbo",
            "extension": ".wtb"
        },
        {
            "name": "Widget Packaging and XML Configuration",
            "type": "application/widget",
            "extension": ".wgt"
        },
        {
            "name": "WinHelp",
            "type": "application/winhlp",
            "extension": ".hlp"
        },
        {
            "name": "Wireless Markup Language (WML)",
            "type": "text/vnd.wap.wml",
            "extension": ".wml"
        },
        {
            "name": "Wireless Markup Language Script (WMLScript)",
            "type": "text/vnd.wap.wmlscript",
            "extension": ".wmls"
        },
        {
            "name": "WMLScript",
            "type": "application/vnd.wap.wmlscriptc",
            "extension": ".wmlsc"
        },
        {
            "name": "Wordperfect",
            "type": "application/vnd.wordperfect",
            "extension": ".wpd"
        },
        {
            "name": "Worldtalk",
            "type": "application/vnd.wt.stf",
            "extension": ".stf"
        },
        {
            "name": "WSDL - Web Services Description Language",
            "type": "application/wsdl+xml",
            "extension": ".wsdl"
        },
        {
            "name": "X BitMap",
            "type": "image/x-xbitmap",
            "extension": ".xbm"
        },
        {
            "name": "X PixMap",
            "type": "image/x-xpixmap",
            "extension": ".xpm"
        },
        {
            "name": "X Window Dump",
            "type": "image/x-xwindowdump",
            "extension": ".xwd"
        },
        {
            "name": "X.509 Certificate",
            "type": "application/x-x509-ca-cert",
            "extension": ".der"
        },
        {
            "name": "Xfig",
            "type": "application/x-xfig",
            "extension": ".fig"
        },
        {
            "name": "XHTML - The Extensible HyperText Markup Language",
            "type": "application/xhtml+xml",
            "extension": ".xhtml"
        },
        {
            "name": "XML - Extensible Markup Language",
            "type": "application/xml",
            "extension": ".xml"
        },
        {
            "name": "XML Configuration Access Protocol - XCAP Diff",
            "type": "application/xcap-diff+xml",
            "extension": ".xdf"
        },
        {
            "name": "XML Encryption Syntax and Processing",
            "type": "application/xenc+xml",
            "extension": ".xenc"
        },
        {
            "name": "XML Patch Framework",
            "type": "application/patch-ops-error+xml",
            "extension": ".xer"
        },
        {
            "name": "XML Resource Lists",
            "type": "application/resource-lists+xml",
            "extension": ".rl"
        },
        {
            "name": "XML Resource Lists",
            "type": "application/rls-services+xml",
            "extension": ".rs"
        },
        {
            "name": "XML Resource Lists Diff",
            "type": "application/resource-lists-diff+xml",
            "extension": ".rld"
        },
        {
            "name": "XML Transformations",
            "type": "application/xslt+xml",
            "extension": ".xslt"
        },
        {
            "name": "XML-Binary Optimized Packaging",
            "type": "application/xop+xml",
            "extension": ".xop"
        },
        {
            "name": "XPInstall - Mozilla",
            "type": "application/x-xpinstall",
            "extension": ".xpi"
        },
        {
            "name": "XSPF - XML Shareable Playlist Format",
            "type": "application/xspf+xml",
            "extension": ".xspf"
        },
        {
            "name": "XUL - XML User Interface Language",
            "type": "application/vnd.mozilla.xul+xml",
            "extension": ".xul"
        },
        {
            "name": "XYZ File Format",
            "type": "chemical/x-xyz",
            "extension": ".xyz"
        },
        {
            "name": "YAML Ain't Markup Language / Yet Another Markup Language",
            "type": "text/yaml",
            "extension": ".yaml"
        },
        {
            "name": "YANG Data Modeling Language",
            "type": "application/yang",
            "extension": ".yang"
        },
        {
            "name": "YIN (YANG - XML)",
            "type": "application/yin+xml",
            "extension": ".yin"
        },
        {
            "name": "Z.U.L. Geometry",
            "type": "application/vnd.zul",
            "extension": ".zir"
        },
        {
            "name": "Zip Archive",
            "type": "application/zip",
            "extension": ".zip"
        },
        {
            "name": "ZVUE Media Manager",
            "type": "application/vnd.handheld-entertainment+xml",
            "extension": ".zmm"
        },
        {
            "name": "Zzazz Deck",
            "type": "application/vnd.zzazz.deck+xml",
            "extension": ".zaz"
        }
    ]

    var exports = {};

    exports.getName = function(file) {
        if (!file instanceof Blob) {
            throw new Error("Parameter is not Blob");
        }

        return file.name;
    }

    exports.getSize = function(file, cb) {
        if (!file instanceof Blob) {
            throw new Error("Parameter is not Blob");
        }

        return file.size;
    }

    exports.getExtension = function(file) {
        var re = /(?:\.([^.]+))?$/;
        return file.name ? re.exec(file.name)[1] : undefined;
    }

    exports.getMimeType = function(file) {
        if (!file instanceof Blob) {
            throw new Error("Parameter is not Blob");
        }
        if (typeof(file.type) !== "undefined") {
            return file.type;
        }
        if (!file.name) {
            return undefined;
        }

        var re = /(?:\.([^.]+))?$/;
        var ext = re.exec(file.name)[0];
        var i;

        for (i = 0; i < mimeTypes.length; i++) {
            if (mimeTypes[i].extension === ext) {
                return mimeTypes[i].type;
            }
        }

        return undefined;
    }

    exports.getHeader = function(file, cb) {
        if (!file instanceof Blob) {
            return cb(new Error("Parameter is not Blob"));
        }

        var blob = file.slice(0, 4);
        var reader = new FileReader();
        reader.onload = function(e) {
            var result = e.target.result;
            var array = new Uint8Array(result);
            var header = [];
            header[0] = array[0].toString(16);
            header[1] = array[1].toString(16);
            header[2] = array[2].toString(16);
            header[3] = array[3].toString(16);
            return cb(null, header);
        }
        reader.onerror = function() {
            return cb(new Error("Load error"));
        }
        reader.readAsArrayBuffer(blob);
    }

    if (typeof(window.fileInspector) === "undefined") {
        window.fileInspector = exports;
    }

    // polyfill
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }
})();