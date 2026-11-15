"use client";

import { useState } from "react";
import Navbar from "@/components/layout/navbar";
import { AnnouncementBar } from "@/components/ui/announcement-bar";

export default function SiteHeader() {
    const [announcementVisible, setAnnouncementVisible] = useState(true);

    return (
        <>
            <AnnouncementBar
                isVisible={announcementVisible}
                onClose={() => setAnnouncementVisible(false)}
            />
            <Navbar announcementVisible={announcementVisible} />
        </>
    );
}
