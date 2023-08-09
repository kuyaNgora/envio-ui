import * as EnvioIcons from "@envio-ui/icons";
import React from "react";

interface IconMap {
  name: string;
  children: React.ReactNode;
}

type IconMapObject = Record<string, IconMap[]>;

// alert
const alert: IconMapObject = {
  outline: [
    {
      name: "AlertCircleOutline",
      children: <EnvioIcons.AlertCircleOutline />,
    },
    {
      name: "AlertTriangleOutline",
      children: <EnvioIcons.AlertTriangleOutline />,
    },
    { name: "InfoOutline", children: <EnvioIcons.InfoOutline /> },
    { name: "QuestionOutline", children: <EnvioIcons.QuestionOutline /> },
    {
      name: "QuestionCircleOutline",
      children: <EnvioIcons.QuestionCircleOutline />,
    },
    { name: "BellOutline", children: <EnvioIcons.BellOutline /> },
    { name: "BellSlashOutline", children: <EnvioIcons.BellSlashOutline /> },
    { name: "StopwatchOutline", children: <EnvioIcons.StopwatchOutline /> },
  ],
  fill: [
    {
      name: "AlertCircle",
      children: <EnvioIcons.AlertCircle />,
    },
    { name: "AlertTriangle", children: <EnvioIcons.AlertTriangle /> },
    { name: "Bell", children: <EnvioIcons.Bell /> },
    { name: "BellSlash", children: <EnvioIcons.BellSlash /> },
    { name: "Info", children: <EnvioIcons.Info /> },
    { name: "QuestionCircle", children: <EnvioIcons.QuestionCircle /> },
    { name: "Stopwatch", children: <EnvioIcons.Stopwatch /> },
  ],
};
// arrow
const arrow: IconMapObject = {
  outline: [
    {
      name: "ArrowCircleDownOutline",
      children: <EnvioIcons.ArrowCircleDownOutline />,
    },
    {
      name: "ArrowCircleUpOutline",
      children: <EnvioIcons.ArrowCircleUpOutline />,
    },
    {
      name: "ArrowCircleLeftOutline",
      children: <EnvioIcons.ArrowCircleLeftOutline />,
    },
    {
      name: "ArrowCircleRightOutline",
      children: <EnvioIcons.ArrowCircleRightOutline />,
    },
    { name: "ArrowDownOutline", children: <EnvioIcons.ArrowDownOutline /> },
    { name: "ArrowUpOutline", children: <EnvioIcons.ArrowUpOutline /> },
    { name: "ArrowLeftOutline", children: <EnvioIcons.ArrowLeftOutline /> },
    {
      name: "ArrowRightOutline",
      children: <EnvioIcons.ArrowRightOutline />,
    },
    {
      name: "ArrowUpRightOutline",
      children: <EnvioIcons.ArrowUpRightOutline />,
    },
    {
      name: "sArrowUpLeftOutline",
      children: <EnvioIcons.ArrowUpLeftOutline />,
    },
    {
      name: "ArrowDownLeftOutline",
      children: <EnvioIcons.ArrowDownLeftOutline />,
    },
    {
      name: "ArrowDownRightOutline",
      children: <EnvioIcons.ArrowDownRightOutline />,
    },
    { name: "ArrowMoveOutline", children: <EnvioIcons.ArrowMoveOutline /> },
    {
      name: "ChevronDownOutline",
      children: <EnvioIcons.ChevronDownOutline />,
    },
    {
      name: "ChevronLeftOutline",
      children: <EnvioIcons.ChevronLeftOutline />,
    },
    {
      name: "ChevronRightOutline",
      children: <EnvioIcons.ChevronRightOutline />,
    },
    { name: "ChevronUpOutline", children: <EnvioIcons.ChevronUpOutline /> },
    {
      name: "ChevronsDownOutline",
      children: <EnvioIcons.ChevronsDownOutline />,
    },
    {
      name: "ChevronsLeftOutline",
      children: <EnvioIcons.ChevronsLeftOutline />,
    },
    {
      name: "ChevronsRightOutline",
      children: <EnvioIcons.ChevronsRightOutline />,
    },
    {
      name: "ChevronsUpOutline",
      children: <EnvioIcons.ChevronsUpOutline />,
    },
    { name: "ShuffleOutline", children: <EnvioIcons.ShuffleOutline /> },
    { name: "Shuffle2Outline", children: <EnvioIcons.Shuffle2Outline /> },
    {
      name: "ArrowDownTurnLeftOutline",
      children: <EnvioIcons.ArrowDownTurnLeftOutline />,
    },
    {
      name: "ArrowDownTurnRightOutline",
      children: <EnvioIcons.ArrowDownTurnRightOutline />,
    },
    {
      name: "ArrowLeftTurnDownOutline",
      children: <EnvioIcons.ArrowLeftTurnDownOutline />,
    },
    {
      name: "ArrowLeftTurnUpOutline",
      children: <EnvioIcons.ArrowLeftTurnUpOutline />,
    },
    {
      name: "ArrowRightTurnDownOutline",
      children: <EnvioIcons.ArrowRightTurnDownOutline />,
    },
    {
      name: "ArrowRightTurnUpOutline",
      children: <EnvioIcons.ArrowRightTurnUpOutline />,
    },
    {
      name: "ArrowUpTurnLeftOutline",
      children: <EnvioIcons.ArrowUpTurnLeftOutline />,
    },
    {
      name: "ArrowUpTurnRightOutline",
      children: <EnvioIcons.ArrowUpTurnRightOutline />,
    },
    {
      name: "CarretDownOutline",
      children: <EnvioIcons.CarretDownOutline />,
    },
    {
      name: "CarretLeftOutline",
      children: <EnvioIcons.CarretLeftOutline />,
    },
    {
      name: "CarretRightOutline",
      children: <EnvioIcons.CarretRightOutline />,
    },
    { name: "CarretUpOutline", children: <EnvioIcons.CarretUpOutline /> },
    { name: "CollapseOutline", children: <EnvioIcons.CollapseOutline /> },
    { name: "ExpandOutline", children: <EnvioIcons.ExpandOutline /> },
    { name: "RepeatOutline", children: <EnvioIcons.RepeatOutline /> },
    { name: "RightLeftOutline", children: <EnvioIcons.RightLeftOutline /> },
    { name: "RotateOutline", children: <EnvioIcons.RotateOutline /> },
    {
      name: "RotateRightOutline",
      children: <EnvioIcons.RotateRightOutline />,
    },
  ],
  fill: [
    {
      name: "ArrowCircleDown",
      children: <EnvioIcons.ArrowCircleDown />,
    },
    {
      name: "ArrowCircleUp",
      children: <EnvioIcons.ArrowCircleUp />,
    },
    {
      name: "ArrowCircleLeft",
      children: <EnvioIcons.ArrowCircleLeft />,
    },
    {
      name: "ArrowCircleRight",
      children: <EnvioIcons.ArrowCircleRight />,
    },
    { name: "CarretDown", children: <EnvioIcons.CarretDown /> },
    { name: "CarretLeft", children: <EnvioIcons.CarretLeft /> },
    { name: "CarretRight", children: <EnvioIcons.CarretRight /> },
    { name: "CarretUp", children: <EnvioIcons.CarretUp /> },
  ],
};
// bussiness
const bussiness: IconMapObject = {
  outline: [
    { name: "BarChartOutline", children: <EnvioIcons.BarChartOutline /> },
    {
      name: "TrendingDownOutline",
      children: <EnvioIcons.TrendingDownOutline />,
    },
    {
      name: "TrendingUpOutline",
      children: <EnvioIcons.TrendingUpOutline />,
    },
    {
      name: "CreditCard2Outline",
      children: <EnvioIcons.CreditCard2Outline />,
    },
    { name: "PieChartOutline", children: <EnvioIcons.PieChartOutline /> },
    { name: "BriefcaseOutline", children: <EnvioIcons.BriefcaseOutline /> },
    { name: "PriceTagOutline", children: <EnvioIcons.PriceTagOutline /> },
    {
      name: "ShoppingBagOutline",
      children: <EnvioIcons.ShoppingBagOutline />,
    },
    {
      name: "ShoppingCartOutline",
      children: <EnvioIcons.ShoppingCartOutline />,
    },
    {
      name: "CreditCardOutline",
      children: <EnvioIcons.CreditCardOutline />,
    },
    { name: "GlobeOutline", children: <EnvioIcons.GlobeOutline /> },
    { name: "Globe2Outline", children: <EnvioIcons.Globe2Outline /> },
    { name: "PaperclipOutline", children: <EnvioIcons.PaperclipOutline /> },
    {
      name: "PaperclipUpOutline",
      children: <EnvioIcons.PaperclipUpOutline />,
    },
  ],
  fill: [
    { name: "Briefcase", children: <EnvioIcons.Briefcase /> },
    { name: "CreditCard", children: <EnvioIcons.CreditCard /> },
    { name: "Globe2", children: <EnvioIcons.Globe2 /> },
    { name: "Globe3", children: <EnvioIcons.Globe3 /> },
    { name: "PieChart", children: <EnvioIcons.PieChart /> },
    { name: "PieChart2", children: <EnvioIcons.PieChart2 /> },
    { name: "PriceTag", children: <EnvioIcons.PriceTag /> },
    { name: "ShoppingBag", children: <EnvioIcons.ShoppingBag /> },
    { name: "ShoppingCart", children: <EnvioIcons.ShoppingCart /> },
  ],
};
// coding
const coding: IconMapObject = {
  outline: [
    { name: "BookmarkOutline", children: <EnvioIcons.BookmarkOutline /> },
    { name: "CopyOutline", children: <EnvioIcons.CopyOutline /> },
    {
      name: "ExternalLinkOutline",
      children: <EnvioIcons.ExternalLinkOutline />,
    },
    { name: "FilterOutline", children: <EnvioIcons.FilterOutline /> },
    { name: "SettingOutline", children: <EnvioIcons.SettingOutline /> },
    { name: "Setting2Outline", children: <EnvioIcons.Setting2Outline /> },
    { name: "SignOutOutline", children: <EnvioIcons.SignOutOutline /> },
    { name: "SigninOutline", children: <EnvioIcons.SigninOutline /> },
    { name: "UploadOutline", children: <EnvioIcons.UploadOutline /> },
    { name: "DownloadOutline", children: <EnvioIcons.DownloadOutline /> },
    {
      name: "CloudDownloadOutline",
      children: <EnvioIcons.CloudDownloadOutline />,
    },
    {
      name: "CloudUploadOutline",
      children: <EnvioIcons.CloudUploadOutline />,
    },
    { name: "HashOutline", children: <EnvioIcons.HashOutline /> },
    { name: "SaveOutline", children: <EnvioIcons.SaveOutline /> },
    { name: "CastOutline", children: <EnvioIcons.CastOutline /> },
    { name: "CodeOutline", children: <EnvioIcons.CodeOutline /> },
    {
      name: "CodeDownloadOutline",
      children: <EnvioIcons.CodeDownloadOutline />,
    },
    { name: "CubeOutline", children: <EnvioIcons.CubeOutline /> },
    { name: "MergeOutline", children: <EnvioIcons.MergeOutline /> },
    { name: "WindowOutline", children: <EnvioIcons.WindowOutline /> },
    {
      name: "WindowDockOutline",
      children: <EnvioIcons.WindowDockOutline />,
    },
  ],
  fill: [
    { name: "Bookmark", children: <EnvioIcons.Bookmark /> },
    { name: "CloudDownload", children: <EnvioIcons.CloudDownload /> },
    { name: "CloudUpload", children: <EnvioIcons.CloudUpload /> },
    { name: "Copy", children: <EnvioIcons.Copy /> },
    { name: "Cube", children: <EnvioIcons.Cube /> },
    { name: "Filter", children: <EnvioIcons.Filter /> },
    { name: "Save", children: <EnvioIcons.Save /> },
    { name: "Setting", children: <EnvioIcons.Setting /> },
    { name: "Setting2", children: <EnvioIcons.Setting2 /> },
    { name: "Window", children: <EnvioIcons.Window /> },
  ],
};
// communication
const communication: IconMapObject = {
  outline: [
    { name: "BluetoothOutline", children: <EnvioIcons.BluetoothOutline /> },
    {
      name: "MessageCircleOutline",
      children: <EnvioIcons.MessageCircleOutline />,
    },
    {
      name: "MessageSquareOutline",
      children: <EnvioIcons.MessageSquareOutline />,
    },
    { name: "MicOutline", children: <EnvioIcons.MicOutline /> },
    { name: "MicOffOutline", children: <EnvioIcons.MicOffOutline /> },
    { name: "MusicOutline", children: <EnvioIcons.MusicOutline /> },
    {
      name: "PaperPlaneOutline",
      children: <EnvioIcons.PaperPlaneOutline />,
    },
    { name: "SignalOutline", children: <EnvioIcons.SignalOutline /> },
    { name: "WifiOutline", children: <EnvioIcons.WifiOutline /> },
    { name: "WifiSlashOutline", children: <EnvioIcons.WifiSlashOutline /> },
    { name: "AtOutline", children: <EnvioIcons.AtOutline /> },
    { name: "BroadcastOutline", children: <EnvioIcons.BroadcastOutline /> },
    { name: "EnvelopOutline", children: <EnvioIcons.EnvelopOutline /> },
    { name: "InboxOutline", children: <EnvioIcons.InboxOutline /> },
    { name: "MovieOutline", children: <EnvioIcons.MovieOutline /> },
    { name: "PhoneOutline", children: <EnvioIcons.PhoneOutline /> },
    { name: "PhoneCallOutline", children: <EnvioIcons.PhoneCallOutline /> },
    {
      name: "PhoneMissedOutline",
      children: <EnvioIcons.PhoneMissedOutline />,
    },
    { name: "PhoneOffOutline", children: <EnvioIcons.PhoneOffOutline /> },
    { name: "RecordingOutline", children: <EnvioIcons.RecordingOutline /> },
    { name: "ReplyOutline", children: <EnvioIcons.ReplyOutline /> },
    { name: "ShakeOutline", children: <EnvioIcons.ShakeOutline /> },
    { name: "VideoOutline", children: <EnvioIcons.VideoOutline /> },
    { name: "VideoOffOutline", children: <EnvioIcons.VideoOffOutline /> },
    {
      name: "VolumeHighOutline",
      children: <EnvioIcons.VolumeHighOutline />,
    },
    { name: "VolumeLowOutline", children: <EnvioIcons.VolumeLowOutline /> },
    { name: "VolumeOffOutline", children: <EnvioIcons.VolumeOffOutline /> },
    {
      name: "VolumeSlashOutline",
      children: <EnvioIcons.VolumeSlashOutline />,
    },
    { name: "CameraOutline", children: <EnvioIcons.CameraOutline /> },
    { name: "TVOutline", children: <EnvioIcons.TVOutline /> },
    {
      name: "BatteryBoltOutline",
      children: <EnvioIcons.BatteryBoltOutline />,
    },
    {
      name: "BatteryEmptyOutline",
      children: <EnvioIcons.BatteryEmptyOutline />,
    },
    { name: "DekstopOutline", children: <EnvioIcons.DekstopOutline /> },
    { name: "HardDriveOutline", children: <EnvioIcons.HardDriveOutline /> },
    { name: "HeadphoneOutline", children: <EnvioIcons.HeadphoneOutline /> },
    { name: "PowerOffOutline", children: <EnvioIcons.PowerOffOutline /> },
    { name: "PrinterOutline", children: <EnvioIcons.PrinterOutline /> },
    {
      name: "SmartphoneOutline",
      children: <EnvioIcons.SmartphoneOutline />,
    },
    { name: "SpeakerOutline", children: <EnvioIcons.SpeakerOutline /> },
    { name: "ShareNodeOutline", children: <EnvioIcons.ShareNodeOutline /> },
    { name: "BackwardOutline", children: <EnvioIcons.BackwardOutline /> },
    {
      name: "BackwardStepOutline",
      children: <EnvioIcons.BackwardStepOutline />,
    },
    {
      name: "PlayCircleOutline",
      children: <EnvioIcons.PlayCircleOutline />,
    },
    {
      name: "PauseCircleOutline",
      children: <EnvioIcons.PauseCircleOutline />,
    },
    {
      name: "SquareCircleOutline",
      children: <EnvioIcons.SquareCircleOutline />,
    },
    { name: "ForwardOutline", children: <EnvioIcons.ForwardOutline /> },
    {
      name: "ForwardStepOutline",
      children: <EnvioIcons.ForwardStepOutline />,
    },
  ],
  fill: [
    { name: "Backward", children: <EnvioIcons.Backward /> },
    { name: "BackwardStep", children: <EnvioIcons.BackwardStep /> },
    { name: "Battery", children: <EnvioIcons.Battery /> },
    { name: "BatteryBolt", children: <EnvioIcons.BatteryBolt /> },
    { name: "Broadcast", children: <EnvioIcons.Broadcast /> },
    { name: "Camera", children: <EnvioIcons.Camera /> },
    { name: "Envelop", children: <EnvioIcons.Envelop /> },
    { name: "Forward", children: <EnvioIcons.Forward /> },
    { name: "ForwardStep", children: <EnvioIcons.ForwardStep /> },
    { name: "HardDrive", children: <EnvioIcons.HardDrive /> },
    { name: "Headphone", children: <EnvioIcons.Headphone /> },
    { name: "Inbox", children: <EnvioIcons.Inbox /> },
    { name: "MessageCircle", children: <EnvioIcons.MessageCircle /> },
    { name: "MessageSquare", children: <EnvioIcons.MessageSquare /> },
    { name: "Mic", children: <EnvioIcons.Mic /> },
    { name: "MicOff", children: <EnvioIcons.MicOff /> },
    { name: "Monitor", children: <EnvioIcons.Monitor /> },
    { name: "Movie", children: <EnvioIcons.Movie /> },
    { name: "PauseCircle", children: <EnvioIcons.PauseCircle /> },
    { name: "Phone", children: <EnvioIcons.Phone /> },
    { name: "PhoneCall", children: <EnvioIcons.PhoneCall /> },
    { name: "PhoneMissed", children: <EnvioIcons.PhoneMissed /> },
    { name: "PhoneOff", children: <EnvioIcons.PhoneOff /> },
    { name: "PlayCircle", children: <EnvioIcons.PlayCircle /> },
    { name: "Printer", children: <EnvioIcons.Printer /> },
    { name: "Recording", children: <EnvioIcons.Recording /> },
    { name: "Reply", children: <EnvioIcons.Reply /> },
    { name: "ShareNode", children: <EnvioIcons.ShareNode /> },
    { name: "Smartphone", children: <EnvioIcons.Smartphone /> },
    { name: "Speaker", children: <EnvioIcons.Speaker /> },
    { name: "SquareCircle", children: <EnvioIcons.SquareCircle /> },
    { name: "TV", children: <EnvioIcons.TV /> },
    { name: "Video", children: <EnvioIcons.Video /> },
    { name: "VideoOff", children: <EnvioIcons.VideoOff /> },
    { name: "VolumeHigh", children: <EnvioIcons.VolumeHigh /> },
    { name: "VolumeLow", children: <EnvioIcons.VolumeLow /> },
    { name: "VolumeOff", children: <EnvioIcons.VolumeOff /> },
    { name: "VolumeSlash", children: <EnvioIcons.VolumeSlash /> },
  ],
};
// editing
const editing: IconMapObject = {
  outline: [
    { name: "CheckOutline", children: <EnvioIcons.CheckOutline /> },
    { name: "XmarkOutline", children: <EnvioIcons.XmarkOutline /> },
    { name: "PlusOutline", children: <EnvioIcons.PlusOutline /> },
    { name: "MinOutline", children: <EnvioIcons.MinOutline /> },
    {
      name: "CheckDoubleOutline",
      children: <EnvioIcons.CheckDoubleOutline />,
    },
    { name: "CircleOutline", children: <EnvioIcons.CircleOutline /> },
    { name: "CircleDotOutline", children: <EnvioIcons.CircleDotOutline /> },
    {
      name: "CheckCircle2Outline",
      children: <EnvioIcons.CheckCircle2Outline />,
    },
    {
      name: "CircleXmarkOutline",
      children: <EnvioIcons.CircleXmarkOutline />,
    },
    { name: "MinCircleOutline", children: <EnvioIcons.MinCircleOutline /> },
    {
      name: "PlusCircleOutline",
      children: <EnvioIcons.PlusCircleOutline />,
    },
    {
      name: "CircleSlashOutline",
      children: <EnvioIcons.CircleSlashOutline />,
    },
    {
      name: "CheckCircleOutline",
      children: <EnvioIcons.CheckCircleOutline />,
    },
    { name: "SquareOutline", children: <EnvioIcons.SquareOutline /> },
    {
      name: "CheckSquare2Outline",
      children: <EnvioIcons.CheckSquare2Outline />,
    },
    {
      name: "XmarkSquareOutline",
      children: <EnvioIcons.XmarkSquareOutline />,
    },
    {
      name: "PlusSquareOutline",
      children: <EnvioIcons.PlusSquareOutline />,
    },
    { name: "MinSquareOutline", children: <EnvioIcons.MinSquareOutline /> },
    {
      name: "CheckSquareOutline",
      children: <EnvioIcons.CheckSquareOutline />,
    },
    { name: "EditOutline", children: <EnvioIcons.EditOutline /> },
    { name: "Edit2Outline", children: <EnvioIcons.Edit2Outline /> },
    { name: "Edit3Outline", children: <EnvioIcons.Edit3Outline /> },
    { name: "ScissorsOutline", children: <EnvioIcons.ScissorsOutline /> },
    { name: "BulbOutline", children: <EnvioIcons.BulbOutline /> },
    { name: "EyeOutline", children: <EnvioIcons.EyeOutline /> },
    { name: "EyeOffOutline", children: <EnvioIcons.EyeOffOutline /> },
    { name: "EyeSlashOutline", children: <EnvioIcons.EyeSlashOutline /> },
    { name: "TrashOutline", children: <EnvioIcons.TrashOutline /> },
    { name: "Trash2Outline", children: <EnvioIcons.Trash2Outline /> },
    { name: "BackspaceOutline", children: <EnvioIcons.BackspaceOutline /> },
    { name: "CropOutline", children: <EnvioIcons.CropOutline /> },
    { name: "FlipOutline", children: <EnvioIcons.FlipOutline /> },
    {
      name: "LayerGroupOutline",
      children: <EnvioIcons.LayerGroupOutline />,
    },
    { name: "LayoutOutline", children: <EnvioIcons.LayoutOutline /> },
    { name: "LinkOutline", children: <EnvioIcons.LinkOutline /> },
    { name: "Link2Outline", children: <EnvioIcons.Link2Outline /> },
    {
      name: "PaintBrushOutline",
      children: <EnvioIcons.PaintBrushOutline />,
    },
    { name: "PaletteOutline", children: <EnvioIcons.PaletteOutline /> },
    { name: "PencilOutline", children: <EnvioIcons.PencilOutline /> },
    { name: "SlidersOutline", children: <EnvioIcons.SlidersOutline /> },
    { name: "SlidersUpOutline", children: <EnvioIcons.SlidersUpOutline /> },
  ],
  fill: [
    { name: "Backspace", children: <EnvioIcons.Backspace /> },
    { name: "CheckCircle2", children: <EnvioIcons.CheckCircle2 /> },
    { name: "CheckSquare", children: <EnvioIcons.CheckSquare /> },
    { name: "CircleDot", children: <EnvioIcons.CircleDot /> },
    { name: "CircleXmark", children: <EnvioIcons.CircleXmark /> },
    { name: "Dot", children: <EnvioIcons.Dot /> },
    { name: "Edit", children: <EnvioIcons.Edit /> },
    { name: "Edit2", children: <EnvioIcons.Edit2 /> },
    { name: "Eye", children: <EnvioIcons.Eye /> },
    { name: "EyeSlash", children: <EnvioIcons.EyeSlash /> },
    { name: "LayerGroup", children: <EnvioIcons.LayerGroup /> },
    { name: "Layout", children: <EnvioIcons.Layout /> },
    { name: "MinCircle", children: <EnvioIcons.MinCircle /> },
    { name: "MinSquare", children: <EnvioIcons.MinSquare /> },
    { name: "PaintBrush", children: <EnvioIcons.PaintBrush /> },
    { name: "Palette", children: <EnvioIcons.Palette /> },
    { name: "Pencil", children: <EnvioIcons.Pencil /> },
    { name: "PlusCircle", children: <EnvioIcons.PlusCircle /> },
    { name: "PlusSquare", children: <EnvioIcons.PlusSquare /> },
    { name: "Sliders", children: <EnvioIcons.Sliders /> },
    { name: "SlidersUp", children: <EnvioIcons.SlidersUp /> },
    { name: "Trash", children: <EnvioIcons.Trash /> },
    { name: "Trash2", children: <EnvioIcons.Trash2 /> },
    { name: "XmarkSquare", children: <EnvioIcons.XmarkSquare /> },
  ],
};
// document
const document: IconMapObject = {
  outline: [
    { name: "ArchiveOutline", children: <EnvioIcons.ArchiveOutline /> },
    { name: "BookOutline", children: <EnvioIcons.BookOutline /> },
    { name: "CalendarOutline", children: <EnvioIcons.CalendarOutline /> },
    { name: "FileOutline", children: <EnvioIcons.FileOutline /> },
    { name: "FileLinesOutline", children: <EnvioIcons.FileLinesOutline /> },
    { name: "FileMinOutline", children: <EnvioIcons.FileMinOutline /> },
    { name: "FilePlusOutline", children: <EnvioIcons.FilePlusOutline /> },
    { name: "ClipboardOutline", children: <EnvioIcons.ClipboardOutline /> },
    { name: "BookOpenOutline", children: <EnvioIcons.BookOpenOutline /> },
    { name: "ImageOutline", children: <EnvioIcons.ImageOutline /> },
    { name: "PantoneOutline", children: <EnvioIcons.PantoneOutline /> },
    { name: "ListOutline", children: <EnvioIcons.ListOutline /> },
    { name: "TextOutline", children: <EnvioIcons.TextOutline /> },
    { name: "MapsOutline", children: <EnvioIcons.MapsOutline /> },
    { name: "FolderOutline", children: <EnvioIcons.FolderOutline /> },
    { name: "FolderMinOutline", children: <EnvioIcons.FolderMinOutline /> },
    {
      name: "FolderPlusOutline",
      children: <EnvioIcons.FolderPlusOutline />,
    },
  ],
  fill: [
    { name: "Archive", children: <EnvioIcons.Archive /> },
    { name: "Book", children: <EnvioIcons.Book /> },
    { name: "BookOpen", children: <EnvioIcons.BookOpen /> },
    { name: "Calendar", children: <EnvioIcons.Calendar /> },
    { name: "Clipboard", children: <EnvioIcons.Clipboard /> },
    { name: "File", children: <EnvioIcons.File /> },
    { name: "FileLines", children: <EnvioIcons.FileLines /> },
    { name: "FilePlus", children: <EnvioIcons.FilePlus /> },
    { name: "Folder", children: <EnvioIcons.Folder /> },
    { name: "FolderMin", children: <EnvioIcons.FolderMin /> },
    { name: "FolderPlus", children: <EnvioIcons.FolderPlus /> },
    { name: "Image", children: <EnvioIcons.Image /> },
    { name: "Image2", children: <EnvioIcons.Image2 /> },
    { name: "Maps", children: <EnvioIcons.Maps /> },
    { name: "Pantone", children: <EnvioIcons.Pantone /> },
  ],
};
// medical
const medical: IconMapObject = {
  outline: [
    { name: "PulseOutline", children: <EnvioIcons.PulseOutline /> },
    {
      name: "ThermometerOutline",
      children: <EnvioIcons.ThermometerOutline />,
    },
    {
      name: "ThermometerMinOutline",
      children: <EnvioIcons.ThermometerMinOutline />,
    },
    {
      name: "ThermometerPlusOutline",
      children: <EnvioIcons.ThermometerPlusOutline />,
    },
    {
      name: "HeightScaleOutline",
      children: <EnvioIcons.HeightScaleOutline />,
    },
    {
      name: "WeightScaleOutline",
      children: <EnvioIcons.WeightScaleOutline />,
    },
  ],
  fill: [
    { name: "Thermometer", children: <EnvioIcons.Thermometer /> },
    { name: "ThermometerMin", children: <EnvioIcons.ThermometerMin /> },
    { name: "ThermometerPlus", children: <EnvioIcons.ThermometerPlus /> },
    { name: "WeightScale", children: <EnvioIcons.WeightScale /> },
  ],
};
// menu
const menu: IconMapObject = {
  outline: [
    { name: "HomeOutline", children: <EnvioIcons.HomeOutline /> },
    { name: "MenuOutline", children: <EnvioIcons.MenuOutline /> },
    { name: "Menu2Outline", children: <EnvioIcons.Menu2Outline /> },
    { name: "Menu3Outline", children: <EnvioIcons.Menu3Outline /> },
    { name: "GridOutline", children: <EnvioIcons.GridOutline /> },
    { name: "GridRoundOutline", children: <EnvioIcons.GridRoundOutline /> },
    { name: "ElipsisOutline", children: <EnvioIcons.ElipsisOutline /> },
    {
      name: "ElipsisVerticalOutline",
      children: <EnvioIcons.ElipsisVerticalOutline />,
    },
  ],
  fill: [
    { name: "Grid", children: <EnvioIcons.Grid /> },
    { name: "GridRound", children: <EnvioIcons.GridRound /> },
    { name: "Home", children: <EnvioIcons.Home /> },
  ],
};
// person
const person: IconMapObject = {
  outline: [
    { name: "PersonOutline", children: <EnvioIcons.PersonOutline /> },
    {
      name: "PersonCheckOutline",
      children: <EnvioIcons.PersonCheckOutline />,
    },
    { name: "PersonMinOutline", children: <EnvioIcons.PersonMinOutline /> },
    {
      name: "PersonPlusOutline",
      children: <EnvioIcons.PersonPlusOutline />,
    },
    { name: "PersonXOutline", children: <EnvioIcons.PersonXOutline /> },
    { name: "PersonsOutline", children: <EnvioIcons.PersonsOutline /> },
  ],
  fill: [
    { name: "Person", children: <EnvioIcons.Person /> },
    { name: "PersonCheck", children: <EnvioIcons.PersonCheck /> },
    { name: "PersonMin", children: <EnvioIcons.PersonMin /> },
    { name: "PersonPlus", children: <EnvioIcons.PersonPlus /> },
    { name: "PersonX", children: <EnvioIcons.PersonX /> },
    { name: "Persons", children: <EnvioIcons.Persons /> },
  ],
};
// security
const security: IconMapObject = {
  outline: [
    { name: "LockOutline", children: <EnvioIcons.LockOutline /> },
    { name: "UnlockOutline", children: <EnvioIcons.UnlockOutline /> },
    { name: "ShieldOutline", children: <EnvioIcons.ShieldOutline /> },
    {
      name: "ShieldSlashOutline",
      children: <EnvioIcons.ShieldSlashOutline />,
    },
  ],
  fill: [
    { name: "Lock", children: <EnvioIcons.Lock /> },
    { name: "Unlock", children: <EnvioIcons.Unlock /> },
    { name: "Shield", children: <EnvioIcons.Shield /> },
    { name: "ShieldSlash", children: <EnvioIcons.ShieldSlash /> },
  ],
};
// shapes
const shapes: IconMapObject = {
  outline: [
    { name: "CompassOutline", children: <EnvioIcons.CompassOutline /> },
    { name: "AwardOutline", children: <EnvioIcons.AwardOutline /> },

    { name: "BoltOutline", children: <EnvioIcons.BoltOutline /> },
    { name: "BoltSlashOutline", children: <EnvioIcons.BoltSlashOutline /> },
    {
      name: "ClockThreeOutline",
      children: <EnvioIcons.ClockThreeOutline />,
    },
    { name: "DropletOutline", children: <EnvioIcons.DropletOutline /> },
    {
      name: "DropletSlashOutline",
      children: <EnvioIcons.DropletSlashOutline />,
    },
    { name: "FireOutline", children: <EnvioIcons.FireOutline /> },

    { name: "GiftOutline", children: <EnvioIcons.GiftOutline /> },
    { name: "LoaderOutline", children: <EnvioIcons.LoaderOutline /> },
    {
      name: "MagnifyingGlassOutline",
      children: <EnvioIcons.MagnifyingGlassOutline />,
    },
    {
      name: "MagnifyingGlassMinOutline",
      children: <EnvioIcons.MagnifyingGlassMinOutline />,
    },
    {
      name: "MagnifyingGlassPlusOutline",
      children: <EnvioIcons.MagnifyingGlassPlusOutline />,
    },
    { name: "MoonOutline", children: <EnvioIcons.MoonOutline /> },
    {
      name: "NavigationOutline",
      children: <EnvioIcons.NavigationOutline />,
    },
    {
      name: "NavigationUpOutline",
      children: <EnvioIcons.NavigationUpOutline />,
    },
    { name: "PercentOutline", children: <EnvioIcons.PercentOutline /> },
    {
      name: "PinLocationOutline",
      children: <EnvioIcons.PinLocationOutline />,
    },
    { name: "LoveOutline", children: <EnvioIcons.LoveOutline /> },
    { name: "StarOutline", children: <EnvioIcons.StarOutline /> },
    { name: "SunOutline", children: <EnvioIcons.SunOutline /> },
    { name: "ToogleOffOutline", children: <EnvioIcons.ToogleOffOutline /> },
    { name: "ToogleOnOutline", children: <EnvioIcons.ToogleOnOutline /> },
    { name: "TruckOutline", children: <EnvioIcons.TruckOutline /> },
    { name: "UmbrelaOutline", children: <EnvioIcons.UmbrelaOutline /> },
  ],
  fill: [
    { name: "Award", children: <EnvioIcons.Award /> },
    { name: "Bolt", children: <EnvioIcons.Bolt /> },
    { name: "BoltSlash", children: <EnvioIcons.BoltSlash /> },
    { name: "Bulb", children: <EnvioIcons.Bulb /> },
    { name: "ClockThree", children: <EnvioIcons.ClockThree /> },
    { name: "Compass", children: <EnvioIcons.Compass /> },
    { name: "Droplet", children: <EnvioIcons.Droplet /> },
    { name: "DropletSlash", children: <EnvioIcons.DropletSlash /> },
    { name: "Fire", children: <EnvioIcons.Fire /> },
    { name: "Flag", children: <EnvioIcons.Flag /> },
    { name: "Gift", children: <EnvioIcons.Gift /> },
    { name: "Love", children: <EnvioIcons.Love /> },
    {
      name: "MagnifyingGlassMin",
      children: <EnvioIcons.MagnifyingGlassMin />,
    },
    {
      name: "MagnifyingGlassPlus",
      children: <EnvioIcons.MagnifyingGlassPlus />,
    },
    { name: "Moon", children: <EnvioIcons.Moon /> },
    { name: "Music", children: <EnvioIcons.Music /> },
    { name: "Navigation", children: <EnvioIcons.Navigation /> },
    { name: "NavigationUp", children: <EnvioIcons.NavigationUp /> },
    { name: "PinLocation", children: <EnvioIcons.PinLocation /> },
    { name: "Star", children: <EnvioIcons.Star /> },
    { name: "Sun", children: <EnvioIcons.Sun /> },
    { name: "ToogleOff", children: <EnvioIcons.ToogleOff /> },
    { name: "ToogleOn", children: <EnvioIcons.ToogleOn /> },
    { name: "Truck", children: <EnvioIcons.Truck /> },
    { name: "Umbrela", children: <EnvioIcons.Umbrela /> },
  ],
};
// social
const social: IconMapObject = {
  outline: [
    { name: "BehanceOutline", children: <EnvioIcons.BehanceOutline /> },
    { name: "FacebookOutline", children: <EnvioIcons.FacebookOutline /> },
    { name: "GithubOutline", children: <EnvioIcons.GithubOutline /> },
    { name: "GoogleOutline", children: <EnvioIcons.GoogleOutline /> },
    { name: "LinkedinOutline", children: <EnvioIcons.LinkedinOutline /> },
    { name: "NpmOutline", children: <EnvioIcons.NpmOutline /> },
    { name: "TwitterOutline", children: <EnvioIcons.TwitterOutline /> },
  ],
  fill: [
    { name: "Behance", children: <EnvioIcons.Behance /> },
    { name: "Facebook", children: <EnvioIcons.Facebook /> },
    { name: "Github", children: <EnvioIcons.Github /> },
    { name: "Google", children: <EnvioIcons.Google /> },
    { name: "Linkedin", children: <EnvioIcons.Linkedin /> },
    { name: "Npm", children: <EnvioIcons.Npm /> },
    { name: "Twitter", children: <EnvioIcons.Twitter /> },
  ],
};

const iconMaps = {
  alert,
  arrow,
  bussiness,
  coding,
  communication,
  editing,
  document,
  medical,
  menu,
  person,
  security,
  shapes,
  social,
};
export default iconMaps;
