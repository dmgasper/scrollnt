const postRefs = [
  { id: 47, image: require("./res/posts/47.png"), width: 1125, height: 1181 },
  { id: 48, image: require("./res/posts/48.png"), width: 1125, height: 1845 },
  { id: 49, image: require("./res/posts/49.png"), width: 1125, height: 1878 },
  { id: 50, image: require("./res/posts/50.png"), width: 1125, height: 1686 },
  { id: 51, image: require("./res/posts/51.png"), width: 1125, height: 1908 },
  { id: 52, image: require("./res/posts/52.png"), width: 1125, height: 1617 },
  { id: 53, image: require("./res/posts/53.png"), width: 1125, height: 1899 },
  { id: 54, image: require("./res/posts/54.png"), width: 1125, height: 1908 },
  { id: 55, image: require("./res/posts/55.png"), width: 1125, height: 1908 },
  { id: 56, image: require("./res/posts/56.png"), width: 1125, height: 1899 },
  { id: 57, image: require("./res/posts/57.png"), width: 1125, height: 1872 },
  { id: 58, image: require("./res/posts/58.png"), width: 1125, height: 1629 },
  { id: 59, image: require("./res/posts/59.png"), width: 1125, height: 1656 },
  { id: 60, image: require("./res/posts/60.png"), width: 1125, height: 1920 },
  { id: 61, image: require("./res/posts/61.png"), width: 1125, height: 1911 },
  { id: 62, image: require("./res/posts/62.png"), width: 1125, height: 1896 },
  { id: 63, image: require("./res/posts/63.png"), width: 1125, height: 1914 },
  { id: 64, image: require("./res/posts/64.png"), width: 1125, height: 1644 },
  { id: 65, image: require("./res/posts/65.png"), width: 1125, height: 1896 },
  { id: 66, image: require("./res/posts/66.png"), width: 1125, height: 1839 },
  { id: 67, image: require("./res/posts/67.png"), width: 1125, height: 1887 },
  { id: 68, image: require("./res/posts/68.png"), width: 1125, height: 1842 },
  { id: 69, image: require("./res/posts/69.png"), width: 1125, height: 1815 },
  { id: 70, image: require("./res/posts/70.png"), width: 1125, height: 1800 },
  { id: 71, image: require("./res/posts/71.png"), width: 1125, height: 1914 },
  { id: 72, image: require("./res/posts/72.png"), width: 1125, height: 1830 },
  { id: 73, image: require("./res/posts/73.png"), width: 1125, height: 1851 },
  { id: 74, image: require("./res/posts/74.png"), width: 1125, height: 1866 },
  { id: 75, image: require("./res/posts/75.png"), width: 1125, height: 1842 },
  { id: 76, image: require("./res/posts/76.png"), width: 1125, height: 1878 },
  { id: 77, image: require("./res/posts/77.png"), width: 1125, height: 1842 },
  { id: 78, image: require("./res/posts/78.png"), width: 1125, height: 1917 },
  { id: 79, image: require("./res/posts/79.jpg"), width: 1125, height: 1931 },
  { id: 80, image: require("./res/posts/80.jpg"), width: 1125, height: 1578 },
  { id: 81, image: require("./res/posts/81.jpg"), width: 1125, height: 1905 },
  { id: 82, image: require("./res/posts/82.jpg"), width: 1125, height: 1905 },
  { id: 83, image: require("./res/posts/83.jpg"), width: 1125, height: 1881 },
  { id: 84, image: require("./res/posts/84.jpg"), width: 1125, height: 1844 },
  { id: 85, image: require("./res/posts/85.jpg"), width: 1125, height: 1593 },
  { id: 86, image: require("./res/posts/86.jpg"), width: 1125, height: 1713 },
  { id: 87, image: require("./res/posts/87.jpg"), width: 1125, height: 1905 },
  { id: 88, image: require("./res/posts/88.jpg"), width: 1125, height: 1840 },
  { id: 89, image: require("./res/posts/89.jpg"), width: 1125, height: 1856 },
  { id: 90, image: require("./res/posts/90.jpg"), width: 1125, height: 1866 },
  { id: 91, image: require("./res/posts/91.jpg"), width: 1125, height: 1844 },
  { id: 92, image: require("./res/posts/92.jpg"), width: 1125, height: 1874 },
  { id: 93, image: require("./res/posts/93.jpg"), width: 1125, height: 1895 },
  { id: 94, image: require("./res/posts/94.jpg"), width: 1125, height: 1590 },
  { id: 95, image: require("./res/posts/95.jpg"), width: 1125, height: 1692 },
  { id: 96, image: require("./res/posts/96.jpg"), width: 1125, height: 1874 },
  { id: 97, image: require("./res/posts/97.jpg"), width: 1125, height: 1861 },
  { id: 98, image: require("./res/posts/98.jpg"), width: 1125, height: 1841 },
  { id: 99, image: require("./res/posts/99.jpg"), width: 1125, height: 1795 },
  { id: 100, image: require("./res/posts/100.jpg"), width: 1125, height: 1688 },
  { id: 101, image: require("./res/posts/101.jpg"), width: 1125, height: 1742 },
  { id: 102, image: require("./res/posts/102.jpg"), width: 1125, height: 1720 },
  { id: 103, image: require("./res/posts/103.jpg"), width: 1125, height: 1866 },
  { id: 104, image: require("./res/posts/104.jpg"), width: 1125, height: 1879 },
  { id: 105, image: require("./res/posts/105.jpg"), width: 1125, height: 1709 },
  { id: 106, image: require("./res/posts/106.jpg"), width: 1125, height: 1895 },
  { id: 107, image: require("./res/posts/107.jpg"), width: 1125, height: 1905 },
  { id: 108, image: require("./res/posts/108.jpg"), width: 1125, height: 1864 },
  { id: 109, image: require("./res/posts/109.jpg"), width: 1125, height: 1918 },
  { id: 110, image: require("./res/posts/110.jpg"), width: 1125, height: 1887 },
  { id: 111, image: require("./res/posts/111.jpg"), width: 1125, height: 1861 },
  { id: 112, image: require("./res/posts/112.jpg"), width: 1125, height: 1874 },
  { id: 113, image: require("./res/posts/113.jpg"), width: 1125, height: 1809 },
  { id: 114, image: require("./res/posts/114.jpg"), width: 1125, height: 1556 },
  { id: 115, image: require("./res/posts/115.jpg"), width: 1125, height: 1836 },
  { id: 116, image: require("./res/posts/116.jpg"), width: 1125, height: 1844 },
  { id: 117, image: require("./res/posts/117.jpg"), width: 1125, height: 1829 },
  { id: 118, image: require("./res/posts/118.jpg"), width: 1125, height: 1892 },
  { id: 119, image: require("./res/posts/119.jpg"), width: 1125, height: 1883 },
  { id: 120, image: require("./res/posts/120.jpg"), width: 1125, height: 1840 },
  { id: 121, image: require("./res/posts/121.jpg"), width: 1125, height: 1866 },
  { id: 122, image: require("./res/posts/122.jpg"), width: 1125, height: 1911 },
  { id: 123, image: require("./res/posts/123.jpg"), width: 1125, height: 1861 },
  { id: 124, image: require("./res/posts/124.jpg"), width: 1125, height: 1828 },
  { id: 125, image: require("./res/posts/125.jpg"), width: 1125, height: 1881 },
  { id: 126, image: require("./res/posts/126.jpg"), width: 1125, height: 1898 },
  { id: 127, image: require("./res/posts/127.jpg"), width: 1125, height: 1866 },
  { id: 128, image: require("./res/posts/128.jpg"), width: 1125, height: 1874 },
  { id: 129, image: require("./res/posts/129.jpg"), width: 1125, height: 1853 },
  { id: 130, image: require("./res/posts/130.jpg"), width: 1125, height: 1842 },
  { id: 131, image: require("./res/posts/131.jpg"), width: 1125, height: 1828 },
  { id: 132, image: require("./res/posts/132.jpg"), width: 1125, height: 1866 },
  { id: 133, image: require("./res/posts/133.jpg"), width: 1125, height: 1908 },
  { id: 134, image: require("./res/posts/134.jpg"), width: 1125, height: 1918 },
  { id: 135, image: require("./res/posts/135.jpg"), width: 1125, height: 1671 },
  { id: 136, image: require("./res/posts/136.jpg"), width: 1125, height: 1606 },
  { id: 137, image: require("./res/posts/137.jpg"), width: 1125, height: 1898 },
  { id: 138, image: require("./res/posts/138.jpg"), width: 1125, height: 1898 },
  { id: 139, image: require("./res/posts/139.jpg"), width: 1125, height: 1905 },
  { id: 140, image: require("./res/posts/140.jpg"), width: 1125, height: 1873 },
  { id: 141, image: require("./res/posts/141.jpg"), width: 1125, height: 1908 },
  { id: 142, image: require("./res/posts/142.jpg"), width: 1125, height: 1911 },
  { id: 143, image: require("./res/posts/143.jpg"), width: 1125, height: 1824 },
  { id: 144, image: require("./res/posts/144.jpg"), width: 1125, height: 1892 },
  { id: 145, image: require("./res/posts/145.jpg"), width: 1125, height: 1853 },
  { id: 146, image: require("./res/posts/146.jpg"), width: 1125, height: 1914 },
  { id: 147, image: require("./res/posts/147.jpg"), width: 1125, height: 1900 },
  { id: 148, image: require("./res/posts/148.jpg"), width: 1125, height: 1825 },
  { id: 149, image: require("./res/posts/149.jpg"), width: 1125, height: 1892 },
  { id: 150, image: require("./res/posts/150.jpg"), width: 1125, height: 1879 },
  { id: 151, image: require("./res/posts/151.jpg"), width: 1125, height: 1840 },
  { id: 152, image: require("./res/posts/152.jpg"), width: 1125, height: 1742 },
  { id: 153, image: require("./res/posts/153.jpg"), width: 1125, height: 1836 },
  { id: 154, image: require("./res/posts/154.jpg"), width: 1125, height: 1887 },
  { id: 155, image: require("./res/posts/155.jpg"), width: 1125, height: 1892 },
  { id: 156, image: require("./res/posts/156.jpg"), width: 1125, height: 1914 },
  { id: 157, image: require("./res/posts/157.jpg"), width: 1125, height: 1757 },
  { id: 158, image: require("./res/posts/158.jpg"), width: 1125, height: 1911 },
  { id: 159, image: require("./res/posts/159.jpg"), width: 1125, height: 1874 },
  { id: 160, image: require("./res/posts/160.jpg"), width: 1125, height: 1586 },
];

export default postRefs;