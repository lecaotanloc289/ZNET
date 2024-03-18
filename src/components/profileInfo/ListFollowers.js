import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Button, Divider, List, Skeleton } from 'antd';
import { getFollowersApi } from '../../utils/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const ListFollowers = () => {
    const [data, setData] = useState([]);
    let res, len;
    const navigate = useNavigate();
    const getData = async () => {
        try {
            res = await getFollowersApi();
            setData(res.data)
            len = res.data.length;
        }
        catch (error) {
            toast.error('Lỗi: ' + error.messase);
        }
    }
    useEffect(() => {
        getData();
        console.log(data.length)
    }, []);
    return (
        <div
            id="scrollableDiv"
            style={{
                height: 550,
                overflow: 'auto',
                width: '100%'
            }}
        >
            <InfiniteScroll
                dataLength={data.length}
                // next={loadMoreData}
                // hasMore={false}
                loader={
                    <Skeleton
                        avatar
                        paragraph={{
                            rows: 1,
                        }}
                        active
                    />
                }
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.image} />}
                                title={<a onClick={() => {
                                    navigate('/profile/' + item.id);
                                }}>{item.name}</a>}
                                description={item.title}
                            />
                            {/* <div>Content</div> */}
                            <Button style={{
                                marginRight: 5
                            }}>Remove</Button>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    );
};

export default ListFollowers;